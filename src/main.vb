Imports System
Imports System.Text

Public Class MainEntry
    Public Function BuildHtml() As String
        Dim sb As New StringBuilder()
        sb.AppendLine("<html>")
        sb.AppendLine("  <body>VB.NET conversion of main.tsx</body>")
        sb.AppendLine("</html>")
        Return sb.ToString()
    End Function
End Class