Imports System
Imports System.Globalization
Imports System.Windows.Forms

' VB.NET equivalent of the TypeScript/TSX App component.
' This mirrors the state, timers, formatting, and tab structure.
' To fully render the UI in VB.NET, wire these members into a WinForms or WPF form.

Public Class App
    Private currentTime As DateTime = DateTime.Now
    Private showErrorModal As Boolean = False

    Public Sub New()
        InitializeTimer()
        InitializeErrorTimer()
    End Sub

    Private Sub InitializeTimer()
        Dim timer As New Timer()
        timer.Interval = 1000

        AddHandler timer.Tick, Sub(sender, e)
                                   currentTime = DateTime.Now
                               End Sub

        timer.Start()
    End Sub

    Private Sub InitializeErrorTimer()
        Dim timer As New Timer()
        timer.Interval = 5000

        AddHandler timer.Tick, Sub(sender, e)
                                   showErrorModal = True
                                   timer.Stop()
                               End Sub

        timer.Start()
    End Sub

    Public Function FormatDate(value As DateTime) As String
        Return value.ToString("ddd, MMM d, yyyy", CultureInfo.GetCultureInfo("en-US"))
    End Function

    Public Function FormatTime(value As DateTime) As String
        Return value.ToString("HH:mm:ss", CultureInfo.GetCultureInfo("en-US"))
    End Function

    Public Sub ShowDashboard()
        ' Placeholder for the main layout assembly.
        ' In a real WinForms/WPF conversion, add controls here for:
        ' - top navigation bar
        ' - tabs: Home, Dashboard, Error log, Video review, Settings
        ' - modal dialog for error notifications
    End Sub

    Public ReadOnly Property CurrentTime As DateTime
        Get
            Return currentTime
        End Get
    End Property

    Public ReadOnly Property ShowErrorModal As Boolean
        Get
            Return showErrorModal
        End Get
    End Property
End Class
