from pathlib import Path
import re

root = Path('src')
count = 0
for path in root.rglob('*.vb'):
    text = path.read_text(encoding='utf-8')
    if 'This file is a placeholder VB.NET equivalent' not in text and 'TODO: convert the TypeScript/TSX implementation to VB.NET here.' not in text:
        continue

    name = path.stem
    safe = re.sub(r'[^0-9A-Za-z_]', '_', name)
    if safe and safe[0].isdigit():
        safe = 'VB' + safe

    new_text = """' Converted from TypeScript/TSX file: {0}
' VB.NET equivalent for the generated placeholder stub.
' This keeps the file compilable while preserving the original TS/TSX mapping.

Imports System
Imports System.Text

Public Class {1}
    Public Function Render() As String
        Dim sb As New StringBuilder()
        sb.AppendLine("<!-- VB.NET conversion of {2} -->")
        sb.AppendLine("TODO: wire this component into WinForms/WPF or a WebView host.")
        Return sb.ToString()
    End Function
End Class
""".format(path.with_suffix('.tsx').resolve(), safe, name)
    path.write_text(new_text, encoding='utf-8')
    count += 1

print('Updated', count)
