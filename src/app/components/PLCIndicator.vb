Imports System
Imports System.Text

Public Class PLCIndicator
    Public Function BuildHtml(readActive As Boolean, writeActive As Boolean) As String
        Dim sb As New StringBuilder()
        sb.AppendLine("<div class='bg-white rounded px-3 py-2' style='border: 0.5px solid rgba(0,0,0,0.08)'>")
        sb.AppendLine("  <div class='text-[11px] text-muted-foreground mb-1'>PLC Communication</div>")
        sb.AppendLine("  <div class='flex items-center gap-3'>")
        sb.AppendLine("    <span>Read: " & If(readActive, "Active", "Idle") & "</span>")
        sb.AppendLine("    <span>Write: " & If(writeActive, "Active", "Idle") & "</span>")
        sb.AppendLine("  </div>")
        sb.AppendLine("</div>")
        Return sb.ToString()
    End Function
End Class