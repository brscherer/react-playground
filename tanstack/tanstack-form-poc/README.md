# Tanstack Form POC

Key points taken from the TanStack Form philosophy:

- Minimal, predictable primitives: TanStack Form provides a small set of composable primitives (fields, forms, validation, state observers) that let you build complex UX without magic or implicit behavior.
- Local-first, synchronous-by-default: Form state is local, synchronous, and easy to inspect. Side effects and async behavior are explicit and opt-in.
- Controlled building blocks: Rather than hidden global state or opaque internals, TanStack Form exposes explicit APIs so behavior is easier to reason about and test.
- Small surface area: The library aims to avoid large, monolithic APIs. That keeps the learning curve low and integration with other tools straightforward.

Read the full philosophy here: https://tanstack.com/form/latest/docs/philosophy

## How this POC highlights the philosophy

- Examples use plain React components plus TanStack Form primitives (no heavy wrappers).
- Validation and submission flows are explicit in the demo; async loads or server sync are shown as explicit steps.
- The sample code demonstrates composing smaller field components into a larger form with straightforward state flow.

## Comparison (short)

High-level comparison notes (based on the TanStack Form comparison guide):

- vs Formik / react-hook-form / Final Form: TanStack Form focuses on smaller, more explicit primitives and predictable state updates. It avoids large lifecycle abstractions and tries to be easier to reason about when building custom UX.
- Flexibility: TanStack Form is designed to integrate well with other TanStack tools (Query, Store) or with any async layer. It doesn't force a particular validation or persistence model.
- Performance: TanStack Form encourages local updates and minimal re-renders by design; real-world performance depends on how you compose the primitives.

See the comparison guide: https://tanstack.com/form/latest/docs/comparison

## Project layout (where to look)

- `src/` — application source
  - `components/` — UI components used by the demos (look for form fields and form containers)
  - `hooks/` — any small hooks used to integrate forms with local/state or fetch logic
  - `router.tsx` / `routes/` — navigation for the POC pages (if present)

If you're exploring the codebase, start by opening the demo page component that renders the form (look for filenames containing "form" or "Form").

## Small usage guide (how to build a form)

Contract (inputs/outputs):

- Input: form fields (text, select, checkbox) and an optional initial values object.
- Output: a submit handler that receives validated values, plus access to field-level errors and touched state.

Basic steps:

1. Create a form using the TanStack Form primitives (createForm / useForm; see the demo code).
2. Register fields with the form and provide validation (sync or async) where required.
3. Use form state (values, errors, touched, isSubmitting) to render UI and feedback.
4. Handle submit by calling the form's submit handler and performing whatever side effects you need (API calls, navigation).

Edge cases to consider:

- Empty/undefined values: ensure your initial values cover optional fields.
- Async validation: make async validators explicit and show loading state.
- Large forms: split into smaller sub-forms or field groups to limit re-renders.
