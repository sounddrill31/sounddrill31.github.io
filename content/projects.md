+++
title = "Projects"
slug = "projects"
+++

I have created, contributed to and participated in many small projects. Here are some projects I'm proud of:

{{ range where .Site.Pages "Type" "post" }}
  {{ if in .Params.categories "projects" }}
    * [{{ .Title }}]({{ .Permalink }})
  {{ end }}
{{ end }}