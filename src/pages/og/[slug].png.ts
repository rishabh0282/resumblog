import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return [
    ...posts.map((post) => ({ params: { slug: post.slug }, props: { post } })),
    { params: { slug: 'home' }, props: { post: null } },
  ];
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: any };

  const title = post ? post.data.title : '[Your Name]';
  const tag = post ? post.data.tags[0] : 'QA & Automation Engineer';
  const series = post?.data.series;
  const seriesOrder = post?.data.seriesOrder;

  // Fetch Inter font for Satori (TTF format — woff2 is not supported by satori)
  const fontRes = await fetch(
    'https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-700-normal.woff'
  );
  const fontData = await fontRes.arrayBuffer();

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          background: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '60px',
          fontFamily: 'Inter Tight',
          border: '1px solid rgba(255,255,255,0.08)',
          position: 'relative',
        },
        children: [
          // Site name top-left
          {
            type: 'span',
            props: {
              style: {
                position: 'absolute',
                top: '48px',
                left: '60px',
                fontFamily: 'Inter Tight',
                fontWeight: 700,
                fontSize: '18px',
                color: '#888888',
                letterSpacing: '-0.02em',
              },
              children: '[Your Name]',
            },
          },
          // Accent line
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: '0',
                left: '0',
                width: '240px',
                height: '3px',
                background: '#00F5FF',
              },
            },
          },
          // Tag
          {
            type: 'span',
            props: {
              style: {
                fontFamily: 'Inter Tight',
                fontSize: '14px',
                color: '#888888',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '16px',
                display: 'block',
              },
              children: tag,
            },
          },
          // Series badge
          ...(series ? [{
            type: 'span',
            props: {
              style: {
                fontFamily: 'Inter Tight',
                fontSize: '13px',
                color: '#888888',
                marginBottom: '12px',
                display: 'block',
              },
              children: `Part ${seriesOrder} · ${series}`,
            },
          }] : []),
          // Title
          {
            type: 'h1',
            props: {
              style: {
                fontFamily: 'Inter Tight',
                fontWeight: 700,
                fontSize: title.length > 40 ? '52px' : '64px',
                color: '#F5F5F5',
                letterSpacing: '-0.05em',
                lineHeight: 1.05,
                margin: 0,
              },
              children: title,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter Tight',
          data: fontData,
          weight: 700,
          style: 'normal' as const,
        },
      ],
    }
  );

  const resvg = new Resvg(svg);
  const png = resvg.render().asPng();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
