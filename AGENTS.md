<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep clinic facts and outbound referral links in a shared browser-safe data module so all pages use the same verified details.
- Use a shared clinic layout and separate TanStack content routes so navigation opens real pages.
- Serve downloaded photography through asset pointers; keep native generated logo imports local so branding remains reusable.
- Reuse the care detail layout for service information pages and keep service destinations in the shared clinic module so exploration stays consistent.
