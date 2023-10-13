﻿---
title: Blazor Tooltip Component
description: Use Blazor Bootstrap tooltip component to add custom tooltips to your web pages.
image: https://i.imgur.com/uqvqb2i.jpg

sidebar_label: Tooltips
sidebar_position: 22
---

# Blazor Tooltips

Use Blazor Bootstrap tooltip component to add custom tooltips to your web pages.

## Parameters

| Name | Type | Description | Required | Default | Added Version | 
|--|--|--|--|--|--|
| ChildContent | RenderFragment | Specifies the content to be rendered inside this. | | | 1.0.0 |
| Color | `TooltipColor` | Gets or sets the tooltip color. | | `TooltipColor.None` | 1.10.0 |
| Placement | Specifies the tooltip placement. Default is top right. | | `TooltipPlacement.Top` | 1.0.0 |
| Title | string | Displays informative text when users hover, focus, or tap an element. | ✔️ | | 1.0.0 |

## Examples

### Tooltips

<div>
    <img src="https://i.imgur.com/uqvqb2i.jpg" alt="Blazor Bootstrap: Tooltip Component" />
</div>

<div>
    <img src="https://i.imgur.com/ZHLTCvX.jpg" alt="Blazor Bootstrap: Tooltip Component" />
</div>

<div>
    <img src="https://i.imgur.com/jwJUhkV.jpg" alt="Blazor Bootstrap: Tooltip Component" />
</div>

<div>
    <img src="https://i.imgur.com/T2YMw9p.jpg" alt="Blazor Bootstrap: Tooltip Component" />
</div>

```cshtml showLineNumbers
<div>
    <Tooltip Title="Tooltip Left" Placement="TooltipPlacement.Left">Tooltip Left</Tooltip>
</div>
<div>
    <Tooltip Title="Tooltip Top">Tooltip Top</Tooltip>
</div>
<div>
    <Tooltip Title="Tooltip Right" Placement="TooltipPlacement.Right">Tooltip Right</Tooltip>
</div>
<div>
    <Tooltip Title="Tooltip Bottom" Placement="TooltipPlacement.Bottom">Tooltip Bottom</Tooltip>
</div>
```

[See tooltips demo here.](https://demos.blazorbootstrap.com/tooltips#examples)

### Disabled button with tooltip

<img src="https://i.imgur.com/PGlmZS3.jpg" alt="Blazor Bootstrap: Tooltip Component" />

```cshtml showLineNumbers
<Tooltip Class="d-inline-block" Title="Disabled button"role="button">
    <button class="btn btn-primary" type="button" disabled>Disabled button</button>
</Tooltip>
```
[See disabled button with tooltip demo here.](https://demos.blazorbootstrap.com/tooltips#disabled-button-with-tootip)

### Tooltip icon with click event

<img src="https://i.imgur.com/D3FrZba.jpg" alt="Blazor Bootstrap: Tooltip Component" />

```cshtml showLineNumbers
<Tooltip Title="Click here" @onclick="OnClick" role="button">
    <i class="bi bi-arrow-repeat text-danger"></i>
</Tooltip>
```

```cs showLineNumbers
@code {
    private void OnClick()
    {
        Console.WriteLine($"clicked");
    }
}
```
[See icon with tooltip demo here.](https://demos.blazorbootstrap.com/tooltips#icon-with-click-event)

### Dynamically update the tooltip text

```cshtml showLineNumbers
<div class="mb-3">
    <Tooltip Title="@text" Placement="TooltipPlacement.Top">Tooltip Bottom</Tooltip>
</div>
<Button Type="ButtonType.Button" Color="ButtonColor.Primary" @onclick="ChangeTooltip">Change Tooltip</Button>

@code {
    private string text = "Tooltip text";

    private void ChangeTooltip() => text = $"Updated {DateTime.Now.ToLongTimeString()}";
}
```
[see demo here](https://demos.blazorbootstrap.com/tooltips#dynamically-update-the-tooltip-text)