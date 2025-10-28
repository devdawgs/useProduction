# White Labeling
This example shows how to dynamically theme a Next.js app using [Tailwind v4](https://tailwindcss.com/docs/theme) based on dynamic server stored data.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## How it works

### Define a theme contract

The first step is to ensure you create a configurable set of variables your components can use and your white labels can configure.

Use the tailwind theme directive to define a theme contract.

[globals.css](./app/globals.css)
```css
@theme inline {
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
}
```

> The variables specified (--primary, --secondary) are the configurable variables that we are applying to the Tailwind system.

Set default values

[globals.css](./app/globals.css)
```css
:root {
  --primary: #a855f7;
  --secondary: #171717;
}
```

### Inject theme variables into the page

In a `layout` file that wraps your app, fetch the dynamic white label data

```ts
// Usually an api call to your backend
const domainData = await getBrandData(domain);
```

Apply the dynamic values to the theme variables

```ts
const themeVariables = {
    "--primary": domainData.colors.primary,
    "--secondary": domainData.colors.secondary,
} as React.CSSProperties;
```

Finally, inject the CSS variables inline

```tsx
return (
    <main style={themeVariables}>{children}</main>
);
```

Complete example

[app/s/[domain]/layout.tsx](./app/s/[domain]/layout.tsx)
```tsx
export default async function Layout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ domain: string }>;
}>) {
    const { domain } = await params;
    const domainData = await getBrandData(domain);

    if (!domain) {
        notFound();
    }

    const themeVariables = {
        "--primary": domainData.colors.primary,
        "--secondary": domainData.colors.secondary,
    } as React.CSSProperties;

    return (
        <main style={themeVariables}>
            {children}
        </main>
    );
}
```

## Using the theme

You can now use the theme variables in your components under the layout.


[app/s/[domain]/page.tsx](./app/s/[domain]/page.tsx)
```tsx
return (
    <PageLayout>
        <Logo src={domainData.logo} />
        <Header>{domainData.name}</Header>
        <Button className={"bg-primary"}>Primary</Button>
        <Button className={"bg-secondary"}>Secondary</Button>
    </PageLayout>
);
```