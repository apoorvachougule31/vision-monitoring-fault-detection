Imports System
Imports System.Text

Public Class SettingsTab
    Public Function BuildHtml() As String
        Dim sb As New StringBuilder()
        sb.AppendLine("<div class='p-5'>")
        sb.AppendLine("  <div class='grid grid-cols-2 gap-4'>")
        sb.AppendLine("    <div class='bg-white rounded-[12px] p-5' style='border: 0.5px solid rgba(0,0,0,0.08)'>")
        sb.AppendLine("      <h3 class='mb-4'>Camera settings</h3>")
        sb.AppendLine("      <button class='bg-primary text-white px-4 h-9 rounded text-[14px] w-full mt-2'>Save camera settings</button>")
        sb.AppendLine("    </div>")
        sb.AppendLine("  </div>")
        sb.AppendLine("</div>")
        Return sb.ToString()
    End Function
End Class