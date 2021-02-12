export default {
  widgets: [
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
                  buildHookId: '602647f3230aa1a39f997396',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bydft9ca',
                  apiId: '28c4982f-e93b-4aa4-95e2-62182de05573'
                },
                {
                  buildHookId: '602647f3011f398a72c0efa8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2hf2cm6g',
                  apiId: '779edffa-1670-4f89-9e54-f10dd1778329'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MikeOwino/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2hf2cm6g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
