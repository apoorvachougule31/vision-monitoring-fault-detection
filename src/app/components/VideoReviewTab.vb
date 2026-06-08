Imports System
Imports System.Collections.Generic
Imports System.Text

Public Class VideoReviewTab
    Private ReadOnly clips As List(Of ClipRecord) = New List(Of ClipRecord) From {
        New ClipRecord With {.Filename = "2026-06-06_14-23-15_E401.mp4", .Machine = "Injection Mold 01", .Camera = "Camera 3", .Selected = True}
    }

    Public Function BuildHtml() As String
        Dim sb As New StringBuilder()
        sb.AppendLine("<div class='p-5'>")
        sb.AppendLine("  <div class='grid grid-cols-3 gap-4'>")
        sb.AppendLine("    <div class='col-span-2'>")
        For Each clip In clips
            sb.AppendLine("      <div class='text-[13px] mb-1'>" & clip.Filename & "</div>")
        Next
        sb.AppendLine("    </div>")
        sb.AppendLine("  </div>")
        sb.AppendLine("</div>")
        Return sb.ToString()
    End Function
End Class

Public Class ClipRecord
    Public Property Filename As String
    Public Property Machine As String
    Public Property Camera As String
    Public Property Selected As Boolean
End Class