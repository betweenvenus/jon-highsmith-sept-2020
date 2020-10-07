<script>
import content from "../content/about-jon.md";
  const {
    metadata: { title },
    html: aboutMe,
  } = content;

  const links = [{
    title: 'GitHub',
    url: 'https://github.com/betweenvenus'
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/betweenvenus/'
  },
  {
    title: 'Email',
    url: 'mailto:jon@gojira.dev'
  },
  {
    title: 'My résumé',
    url: '/resume.pdf'
  }];

  const skills = [{
    title: 'Front end',
    list: ['HTML/CSS/Javascript (ES6)', 'React', 'Svelte (this is a Sapper website!)', 'Tailwind' ]
  },
  {
    title: 'Back end',
    list: ['Spring Boot', 'PHP', 'Flask', 'Templating engines (Jinja, Twig)', 'Wordpress']
  },
  {
    title: 'Miscellaneous',
    list: ['Linux', 'Webpack', 'Git', 'SQL', 'Docker', 'NPM']
  }
  ]
</script>

<style>
  .rapper {
    padding: 5% 10%;
  }

  .is-this-obnoxious\? {
    font-size: 3rem;
    text-transform: uppercase;
    color: black;
  }

  .about {
    font-size: 1.5rem;
    color: white;
    mix-blend-mode: difference;
  }
</style>

<svelte:head>
  <title>Jon Highsmith</title>
</svelte:head>
<div class="rapper">
  <h1 class="is-this-obnoxious?">{title}</h1>
  {#if content}
    <section class="about">
      {@html aboutMe}
    </section>
    <section class="skills">
      {#each skills as skill}
        <h2>{skill.title}</h2>
        <ul>
          {#each skill.list as item}
            <li>{item}</li>
          {/each}
        </ul>
      {/each}
    </section>
    <section class="links">
      {#each links as link}
        <article class="link">
          <a href="{link.url}">{link.title}</a>
        </article>
      {/each}
    </section>
  {/if}
</div>
