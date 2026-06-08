Imports System
Imports System.Collections.Generic
Imports System.Text

Public Class ErrorLogTab
    Private ReadOnly errors As List(Of ErrorRecord) = New List(Of ErrorRecord) From {
        New ErrorRecord With {.Id = 1, .Timestamp = "2026-06-06 14:23:15", .Machine = "Injection Mold 01", .Code = "E-401", .CodeType = "critical", .Camera = "Camera 3", .Duration = "45s", .Status = "Unresolved"},
        New ErrorRecord With {.Id = 2, .Timestamp = "2026-06-06 16:45:22", .Machine = "Assembly Line A", .Code = "W-202", .CodeType = "warning", .Camera = "Camera 1", .Duration = "12s", .Status = "Reviewed"},
        New ErrorRecord With {.Id = 3, .Timestamp = "2026-06-06 12:10:33", .Machine = "CNC Machine 03", .Code = "E-305", .CodeType = "critical", .Camera = "Camera 5", .Duration = "1m 23s", .Status = "Unresolved"},
        New ErrorRecord With {.Id = 4, .Timestamp = "2026-06-06 11:05:44", .Machine = "Packaging Unit 02", .Code = "I-101", .CodeType = "info", .Camera = "Camera 2", .Duration = "8s", .Status = "Reviewed"},
        New ErrorRecord With {.Id = 5, .Timestamp = "2026-06-06 10:22:11", .Machine = "Injection Mold 01", .Code = "E-401", .CodeType = "critical", .Camera = "Camera 3", .Duration = "52s", .Status = "Resolved"},
        New ErrorRecord With {.Id = 6, .Timestamp = "2026-06-06 09:15:55", .Machine = "Quality Check Station", .Code = "W-203", .CodeType = "warning", .Camera = "Camera 4", .Duration = "19s", .Status = "Reviewed"},
        New ErrorRecord With {.Id = 7, .Timestamp = "2026-06-06 08:44:12", .Machine = "Assembly Line A", .Code = "E-502", .CodeType = "critical", .Camera = "Camera 1", .Duration = "2m 15s", .Status = "Resolved"},
        New ErrorRecord With {.Id = 8, .Timestamp = "2026-06-06 07:30:28", .Machine = "CNC Machine 03", .Code = "W-201", .CodeType = "warning", .Camera = "Camera 5", .Duration = "14s", .Status = "Reviewed"}
    }

    Public Function GetCodeColor(codeType As String) As String
        Select Case codeType.ToLowerInvariant()
            Case "critical"
                Return "bg-[#E24B4A] text-white"
            Case "warning"
                Return "bg-[#EF9F27] text-white"
            Case "info"
                Return "bg-blue-500 text-white"
            Case Else
                Return "bg-gray-400 text-white"
        End Select
    End Function

    Public Function BuildHtml() As String
        Dim sb As New StringBuilder()
        sb.AppendLine("<div class='p-5'>")
        sb.AppendLine("  <div class='bg-white rounded-[12px] p-5' style='border: 0.5px solid rgba(0,0,0,0.08)'>")
        sb.AppendLine("    <table class='w-full'>")
        sb.AppendLine("      <thead>")
        sb.AppendLine("        <tr class='bg-gray-50' style='border-bottom: 0.5px solid rgba(0,0,0,0.08)'>")
        sb.AppendLine("          <th class='text-left px-3 py-2 text-[12px] text-muted-foreground'>#</th>")
        sb.AppendLine("          <th class='text-left px-3 py-2 text-[12px] text-muted-foreground'>Timestamp</th>")
        sb.AppendLine("          <th class='text-left px-3 py-2 text-[12px] text-muted-foreground'>Machine</th>")
        sb.AppendLine("          <th class='text-left px-3 py-2 text-[12px] text-muted-foreground'>Error code</th>")
        sb.AppendLine("          <th class='text-left px-3 py-2 text-[12px] text-muted-foreground'>Camera</th>")
        sb.AppendLine("          <th class='text-left px-3 py-2 text-[12px] text-muted-foreground'>Duration</th>")
        sb.AppendLine("          <th class='text-left px-3 py-2 text-[12px] text-muted-foreground'>Status</th>")
        sb.AppendLine("          <th class='text-left px-3 py-2 text-[12px] text-muted-foreground'>Clip</th>")
        sb.AppendLine("        </tr>")
        sb.AppendLine("      </thead>")
        sb.AppendLine("      <tbody>")

        Dim index As Integer = 0
        For Each err As ErrorRecord In errors
            Dim border As String = If(index < errors.Count - 1, "border-bottom: 0.5px solid rgba(0,0,0,0.04)", "border-bottom: none")
            sb.AppendLine("        <tr style='" & border & "'>")
            sb.AppendLine("          <td class='px-3 py-3 text-[13px]'>" & err.Id.ToString() & "</td>")
            sb.AppendLine("          <td class='px-3 py-3 text-[13px]'>" & err.Timestamp & "</td>")
            sb.AppendLine("          <td class='px-3 py-3 text-[13px]'>" & err.Machine & "</td>")
            sb.AppendLine("          <td class='px-3 py-3'><span class='px-2 py-1 rounded text-[12px] " & GetCodeColor(err.CodeType) & "'>" & err.Code & "</span></td>")
            sb.AppendLine("          <td class='px-3 py-3 text-[13px]'>" & err.Camera & "</td>")
            sb.AppendLine("          <td class='px-3 py-3 text-[13px]'>" & err.Duration & "</td>")
            sb.AppendLine("          <td class='px-3 py-3 text-[13px]'>" & err.Status & "</td>")
            sb.AppendLine("          <td class='px-3 py-3'><button class='text-[12px] px-3 py-1 rounded' style='border: 0.5px solid rgba(0,0,0,0.12)'>Play</button></td>")
            sb.AppendLine("        </tr>")
            index += 1
        Next

        sb.AppendLine("      </tbody>")
        sb.AppendLine("    </table>")
        sb.AppendLine("  </div>")
        sb.AppendLine("</div>")

        Return sb.ToString()
    End Function
End Class

Public Class ErrorRecord
    Public Property Id As Integer
    Public Property Timestamp As String
    Public Property Machine As String
    Public Property Code As String
    Public Property CodeType As String
    Public Property Camera As String
    Public Property Duration As String
    Public Property Status As String
End Class