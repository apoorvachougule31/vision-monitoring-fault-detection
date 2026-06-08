Imports System
Imports System.Collections.Generic
Imports System.Text

Public Class HomeTab
    Private ReadOnly cameras As List(Of CameraFeed) = New List(Of CameraFeed) From {
        New CameraFeed With {.Id = 1, .Name = "Camera 1", .Type = "Ethernet", .Zone = "Assembly Zone A", .Ip = "192.168.1.201", .Status = "online"},
        New CameraFeed With {.Id = 2, .Name = "Camera 2", .Type = "USB", .Zone = "Packaging Zone B", .Port = "USB3.0-1", .Status = "online"}
    }

    Public Function BuildHtml() As String
        Dim sb As New StringBuilder()
        sb.AppendLine("<div class='p-5'>")
        sb.AppendLine("  <h2 class='mb-5'>Live camera feed</h2>")
        sb.AppendLine("  <div class='grid grid-cols-2 gap-4'>")
        For Each camera In cameras
            Dim label As String = If(camera.Type = "Ethernet", camera.Ip, camera.Port)
            sb.AppendLine("    <div class='bg-white rounded-[12px] overflow-hidden' style='border: 0.5px solid rgba(0,0,0,0.08)'>")
            sb.AppendLine("      <div class='p-4'>")
            sb.AppendLine("        <h3 class='mb-3'>" & camera.Name & "</h3>")
            sb.AppendLine("        <div class='grid grid-cols-2 gap-3 text-[13px]'>")
            sb.AppendLine("          <div><div class='text-[11px] text-muted-foreground mb-1'>Connection type</div><div>" & camera.Type & "</div></div>")
            sb.AppendLine("          <div><div class='text-[11px] text-muted-foreground mb-1'>Zone</div><div>" & camera.Zone & "</div></div>")
            sb.AppendLine("          <div class='col-span-2'><div class='text-[11px] text-muted-foreground mb-1'>" & If(camera.Type = "Ethernet", "IP Address", "Port") & "</div><div class='font-mono text-[12px]'>" & label & "</div></div>")
            sb.AppendLine("        </div>")
            sb.AppendLine("      </div>")
            sb.AppendLine("    </div>")
        Next
        sb.AppendLine("  </div>")
        sb.AppendLine("</div>")
        Return sb.ToString()
    End Function
End Class

Public Class CameraFeed
    Public Property Id As Integer
    Public Property Name As String
    Public Property Type As String
    Public Property Zone As String
    Public Property Ip As String
    Public Property Port As String
    Public Property Status As String
End Class