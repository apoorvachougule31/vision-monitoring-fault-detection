Imports System
Imports System.Collections.Generic
Imports System.Text

Public Class MachinesTab
    Private ReadOnly machines As List(Of MachineRecord) = New List(Of MachineRecord) From {
        New MachineRecord With {.Name = "Injection Mold 01", .Status = "Fault", .Type = "Injection molding machine", .Camera = "Camera 3", .ErrorsToday = 4, .ErrorsWeek = 12, .LastError = "2h ago", .PlcAddress = "192.168.1.101"}
    }

    Public Function BuildHtml() As String
        Dim sb As New StringBuilder()
        sb.AppendLine("<div class='p-5'>")
        For Each machine In machines
            sb.AppendLine("  <div class='bg-white rounded-[12px] p-5' style='border: 0.5px solid rgba(0,0,0,0.08)'>")
            sb.AppendLine("    <h3>" & machine.Name & "</h3>")
            sb.AppendLine("    <div>Type: " & machine.Type & "</div>")
            sb.AppendLine("    <div>Camera: " & machine.Camera & "</div>")
            sb.AppendLine("    <div>Status: " & machine.Status & "</div>")
            sb.AppendLine("  </div>")
        Next
        sb.AppendLine("</div>")
        Return sb.ToString()
    End Function
End Class

Public Class MachineRecord
    Public Property Name As String
    Public Property Status As String
    Public Property Type As String
    Public Property Camera As String
    Public Property ErrorsToday As Integer
    Public Property ErrorsWeek As Integer
    Public Property LastError As String
    Public Property PlcAddress As String
End Class