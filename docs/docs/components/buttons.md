---
sidebar_label: Buttons
sidebar_position: 2
---

# Buttons

Documentation and examples for BlazorBootstrap Buttons.

## Examples

### Buttons

```cshtml
<p>
    <Button Color="ButtonColor.Primary"> Primary </Button>
    <Button Color="ButtonColor.Secondary"> Secondary </Button>
    <Button Color="ButtonColor.Success"> Success </Button>
    <Button Color="ButtonColor.Danger"> Danger </Button>
    <Button Color="ButtonColor.Warning"> Warning </Button>
    <Button Color="ButtonColor.Info"> Info </Button>
    <Button Color="ButtonColor.Light"> Light </Button>
    <Button Color="ButtonColor.Dark"> Dark </Button>
    <Button Color="ButtonColor.Link"> Link </Button>
</p>
```

### Button tags

```cshtml
<p>
    <Button Type="ButtonType.Link" Color="ButtonColor.Primary" To="#"> Link </Button>
    <Button Type="ButtonType.Submit" Color="ButtonColor.Primary" To="#"> Button </Button>
</p>
```

### Outline Buttons

```cshtml
<p>
    <Button Color="ButtonColor.Primary" Outline="true"> Primary </Button>
    <Button Color="ButtonColor.Secondary" Outline="true"> Secondary </Button>
    <Button Color="ButtonColor.Success" Outline="true"> Success </Button>
    <Button Color="ButtonColor.Danger" Outline="true"> Danger </Button>
    <Button Color="ButtonColor.Warning" Outline="true"> Warning </Button>
    <Button Color="ButtonColor.Info" Outline="true"> Info </Button>
    <Button Color="ButtonColor.Dark" Outline="true"> Dark </Button>
</p>
```

### Sizes

```cshtml
<p>
    <Button Color="ButtonColor.Primary" Size="Size.Large"> Large button </Button>
    <Button Color="ButtonColor.Secondary" Size="Size.Large"> Large button </Button>
</p>
<p>
    <Button Color="ButtonColor.Primary" Size="Size.Small"> Small button </Button>
    <Button Color="ButtonColor.Secondary" Size="Size.Small"> Small button </Button>
</p>
```

### Disable State

```cshtml
<p>
    <Button Color="ButtonColor.Primary" Size="Size.Large" Disabled="true"> Large button </Button>
    <Button Color="ButtonColor.Secondary" Size="Size.Large" Disabled="true"> Large button </Button>
</p>
<p>
    <Button Type="ButtonType.Link" Color="ButtonColor.Primary" Size="Size.Large" Disabled="true"> Primary link </Button>
    <Button Type="ButtonType.Link" Color="ButtonColor.Secondary" Size="Size.Large" Disabled="true"> Link </Button>
</p>
```

### Block Buttons

```cshtml
<div class="d-grid gap-2">
    <Button Color="ButtonColor.Primary"> Button </Button>
    <Button Color="ButtonColor.Primary"> Button </Button>
</div>
```

```cshtml
<div class="d-grid gap-2 d-md-block mt-2">
    <Button Color="ButtonColor.Primary"> Button </Button>
    <Button Color="ButtonColor.Primary"> Button </Button>
</div>
```

```cshtml
<div class="d-grid gap-2 col-6 mx-auto mt-2">
    <Button Color="ButtonColor.Primary"> Button </Button>
    <Button Color="ButtonColor.Primary"> Button </Button>
</div>
```

```cshtml
<div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
    <Button Color="ButtonColor.Primary"> Button </Button>
    <Button Color="ButtonColor.Primary"> Button </Button>
</div>
```

### Button Toogle States

```cshtml
<p>
    <Button Color="ButtonColor.Primary"> Toggle button </Button>
    <Button Color="ButtonColor.Primary" Active="true"> Active toggle button </Button>
    <Button Color="ButtonColor.Primary" Disabled="true"> Disabled toggle button </Button>
</p>
```

### Button with Loading

```cshtml
<p>
    <Button Color="ButtonColor.Primary" Loading="true" />
    <Button Color="ButtonColor.Primary" Loading="true" LoadingText="Saving..." />
    <Button Color="ButtonColor.Primary" Loading="true">
        <LoadingTemplate>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...
        </LoadingTemplate>
    </Button>
</p>
```

### Buttons with Tooltip

```cshtml
<p>
    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Top"> Tooltip Top </Button>

    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Right"> Tooltip Right </Button>

    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Bottom"> Tooltip Bottom </Button>

    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Left"> Tooltip Left </Button>
</p>
```

:::note

HTML tooltips not supported at this moment.

:::

### Events

#### Click event

```cshtml
<p>
    <Button Color="ButtonColor.Primary" @onclick="OnClick"> Click Event </Button>
</p>
```

```cs
@code{

    protected void OnClick(EventArgs args)
    {
        Console.WriteLine("click event");
    }

}
```

#### Double click event

```cshtml
<p>
    <Button Color="ButtonColor.Primary" @ondblclick="OnDoubleClick"> Double Click Event </Button>
</p>
```

```cs
@code{

    protected void OnDoubleClick(EventArgs args)
    {
        Console.WriteLine("double click event");
    }

}
```

#### Click event with arguments

```cshtml
<p>
    <Button Color="ButtonColor.Primary" @onclick="((args) => OnClickWithArgs(args, message))"> Click   Args </Button>
</p>
```

```cs
@code{

    public string message = "Test message";

    protected void OnClickWithArgs(EventArgs args, string message)
    {
        Console.WriteLine($"message: {message}");
    }

}
```