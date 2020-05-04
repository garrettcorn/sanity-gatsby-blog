export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb04a0e9c69a7020439c03b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-prd63i4q',
                  apiId: '9ba3defc-1731-4e71-b621-4063e11ccfbc'
                },
                {
                  buildHookId: '5eb04a0ee579e601c47b40f8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6qc99x7q',
                  apiId: 'b622b2ce-93fa-4625-a6fe-5b2fdb8e5049'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/garrettcorn/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6qc99x7q.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
