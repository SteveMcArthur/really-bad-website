# Really Bad Test Site

This is a deliberately flawed static website for testing SiteFix Agent or other website audit tools.

## Run locally

```bash
node server.js
```

Then scan:

```text
http://localhost:3100
```

## Intentional issues included

- Broken internal links
- Broken local assets
- Missing meta descriptions
- Duplicate and empty page titles
- Poor heading hierarchy
- Multiple H1 tags
- Missing `lang` attribute on the homepage
- Images with missing or empty alt attributes
- Duplicate IDs
- Poor colour contrast
- Tiny text
- Inaccessible form fields without labels
- `target="_blank"` without `rel`
- Table-based layout
- JavaScript console error
- Layout shift after load
- A Cloudflare `/cdn-cgi/l/email-protection` placeholder that should be ignored by the scanner

Do not use this as a real website template.
