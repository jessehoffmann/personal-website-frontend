export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <head>
                <link rel='icon' href='%PUBLIC_URL%/monogram.png' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta name='theme-color' content='#000000' />

                <title>Jesse Thomas Hoffmann</title>
                <meta
                    name='description'
                    content='Jesse Thomas Hoffmann Portfolio Website'
                />
                <link rel='apple-touch-icon' href='%PUBLIC_URL%/monogram.png' />

                <meta name='”robots”' content='index, follow' />
            </head>
            <body>
                <div id='root'>{children}</div>
            </body>
        </html>
    )
}
