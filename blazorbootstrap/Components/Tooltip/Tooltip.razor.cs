namespace BlazorBootstrap;

public partial class Tooltip : BlazorBootstrapComponentBase
{
    #region Fields and Constants

    private TooltipColor color = default!;

    private bool isFirstRenderComplete = false;
    private DotNetObjectReference<Tooltip> objRef = default!;
    private string title = default!;

    #endregion

    #region Methods

    /// <inheritdoc />
    protected override async ValueTask DisposeAsync(bool disposing)
    {
        if (disposing)
        {
            try
            {
                if (Rendered)
                    await JS.InvokeVoidAsync("window.blazorBootstrap.tooltip.dispose", ElementRef);
            }
            catch (JSDisconnectedException)
            {
                // do nothing
            }

            objRef?.Dispose();
        }

        await base.DisposeAsync(disposing);
    }

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender)
            isFirstRenderComplete = true;

        base.OnAfterRender(firstRender);
    }

    protected override async Task OnInitializedAsync()
    {
        title = Title;
        color = Color;
        objRef ??= DotNetObjectReference.Create(this);

        await base.OnInitializedAsync();

        ExecuteAfterRender(async () =>
        {
            await JS.InvokeVoidAsync("window.blazorBootstrap.tooltip.initialize", ElementRef, objRef);
        });
    }

    protected override async Task OnParametersSetAsync()
    {
        if (isFirstRenderComplete)
            if (title != Title || color != Color)
            {
                title = Title;
                color = Color;

                await JS.InvokeVoidAsync("window.blazorBootstrap.tooltip.dispose", ElementRef);
                await JS.InvokeVoidAsync("window.blazorBootstrap.tooltip.update", ElementRef);
            }
    }

    [JSInvokable]
    public async Task bsHiddenTooltip() => await Hidden.InvokeAsync(new TooltipEventArgs(TooltipMessage.Id, ElementId));

    [JSInvokable]
    public async Task bsHideTooltip() => await Hiding.InvokeAsync(new TooltipEventArgs(TooltipMessage.Id, ElementId));

    [JSInvokable]
    public async Task bsShownTooltip() => await Shown.InvokeAsync(new TooltipEventArgs(TooltipMessage.Id, ElementId));

    [JSInvokable]
    public async Task bsShowTooltip() => await Showing.InvokeAsync(new TooltipEventArgs(TooltipMessage.Id, ElementId));

    /// <summary>
    /// Hides an element’s tooltip.
    /// </summary>
    public async Task HideAsync() => await JS.InvokeVoidAsync("window.blazorBootstrap.tooltip.hide", ElementId);

    /// <summary>
    /// Reveals an element’s tooltip.
    /// </summary>
    public async Task ShowAsync() => await JS.InvokeVoidAsync("window.blazorBootstrap.tooltip.show", ElementId, objRef);

    #endregion

    #region Properties, Indexers

    /// <inheritdoc />
    protected override bool ShouldAutoGenerateId => true;

    /// <summary>
    /// Specifies the content to be rendered inside this.
    /// </summary>
    [Parameter]
    public RenderFragment ChildContent { get; set; } = default!;

    [Parameter] public TooltipColor Color { get; set; }

    private string colorClass => BootstrapClassProvider.TooltipColor(Color);
    private string placement => Placement.ToTooltipPlacementName();

    /// <summary>
    /// Specifies the tooltip placement. Default is top right.
    /// </summary>
    [Parameter]
    public TooltipPlacement Placement { get; set; } = TooltipPlacement.Top;

    /// <summary>
    /// Displays informative text when users hover, focus, or tap an element.
    /// </summary>
    [Parameter]
    [EditorRequired]
    public string Title { get; set; } = default!;

    #endregion
}
