Imports System
Imports System.Collections.Generic
Imports System.Text

Public Class DashboardTab
    Private ReadOnly metrics As List(Of MetricItem) = New List(Of MetricItem) From {
        New MetricItem With {.Label = "Active errors", .Value = "4", .Color = "text-[#E24B4A]"},
        New MetricItem With {.Label = "Cameras active", .Value = "3/4", .Color = "text-[#EF9F27]"},
        New MetricItem With {.Label = "Clips recorded today", .Value = "27", .Color = "text-foreground"},
        New MetricItem With {.Label = "System uptime", .Value = "99.2%", .Color = "text-[#639922]"}
    }

    Public Function BuildHtml() As String
        Dim sb As New StringBuilder()
        sb.AppendLine("<div class='p-5 space-y-5'>")
        sb.AppendLine("  <div class='grid grid-cols-4 gap-4'>")
        For Each item In metrics
            sb.AppendLine("    <div class='bg-white rounded-[12px] p-5' style='border: 0.5px solid rgba(0,0,0,0.08)'>")
            sb.AppendLine("      <div class='text-[11px] uppercase tracking-wider text-muted-foreground mb-2'>" & item.Label & "</div>")
            sb.AppendLine("      <div class='text-[26px] leading-none " & item.Color & " mb-1'>" & item.Value & "</div>")
            sb.AppendLine("      <div class='text-[12px] text-muted-foreground'>Current status</div>")
            sb.AppendLine("    </div>")
        Next
        sb.AppendLine("  </div>")
        sb.AppendLine("</div>")
        Return sb.ToString()
    End Function
End Class

Public Class MetricItem
    Public Property Label As String
    Public Property Value As String
    Public Property Color As String
End Class