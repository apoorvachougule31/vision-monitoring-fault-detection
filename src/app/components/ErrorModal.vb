Imports System
Imports System.Text

Public Class ErrorModal
    Public Function BuildHtml(errorCode As String, errorDescription As String, camera As String, zone As String) As String
        Dim sb As New StringBuilder()
        sb.AppendLine("<div class='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>")
        sb.AppendLine("  <div class='bg-white rounded-[12px] p-6 max-w-md w-full mx-4'>")
        sb.AppendLine("    <div class='text-[16px] text-[#E24B4A]'>" & errorCode & "</div>")
        sb.AppendLine("    <div class='text-[14px]'>" & errorDescription & "</div>")
        sb.AppendLine("    <div class='text-[14px]'>Camera: " & camera & "</div>")
        sb.AppendLine("    <div class='text-[14px]'>Zone: " & zone & "</div>")
        sb.AppendLine("  </div>")
        sb.AppendLine("</div>")
        Return sb.ToString()
    End Function
End Class