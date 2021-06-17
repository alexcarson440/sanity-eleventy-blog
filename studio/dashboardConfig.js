export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60cba3eda7b8821c0c5e577e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-5xkdoxfq',
                  apiId: 'a29f5dcd-4a3d-4b4f-ae67-82fd25096c66'
                },
                {
                  buildHookId: '60cba3edb3403c175da3a59e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-4uk5uoq9',
                  apiId: '5b10e3c0-a1a2-410c-9188-57fa7bdcca90'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexcarson440/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-4uk5uoq9.netlify.app', category: 'apps'}
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
