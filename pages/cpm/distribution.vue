<template>
  <div class="flex gap-8">
    <div class="prose">
      <h1>CPM Data in context</h1>
      <p>
        It is easy to believe high-resolution models because of their great
        detail. However, the data should always be analysed in the right context.
      </p>
      <p>
        This page shows the expected climate change from different
        projects. When a specific point in the graph is clicked, its
        ancestry will be highlighted.
      </p>
      <p>
        With tools like this we can evaluate whether the selection of CPM
        simulations adequately sampled the variability in the forcing data. We
        can also see whether, for example, high warming in CPM models coincides
        with high warming in CORDEX or CMIP models.
      </p>
      <p>
        More details about this method for providing context is available in the
        storyboard on <a
          href="https://eucp-project.github.io/storyboards/evidence"
          target="_blank"
          rel="noopener"
        >Multiple lines of evidence</a>.
      </p>
    </div>
    <CpmDistribution />
  </div>
</template>
