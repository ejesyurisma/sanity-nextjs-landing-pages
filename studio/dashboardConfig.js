export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e42b407d533bebea5d81d27',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1pu85zhi',
                  apiId: 'f8b9e632-0a3a-4a78-b0d1-b0477358f7c7'
                },
                {
                  buildHookId: '5e42b408e1fc539ee6ed66d5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-g4s76buv',
                  apiId: 'b986c42a-f15b-4891-a221-bc8adbea1483'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ejesyurisma/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-g4s76buv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
