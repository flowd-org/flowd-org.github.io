---
type: "page"
layout: "hextra-home"
title: "flowd.org"
toc: false
sidebar:
  exclude: true
page:
  width: full
---

<section class="home-hero">
  <div class="hero-grid">
    <div class="hero-copy">
      <h1>Turn Scripts into Universal Automation</h1>
      <p class="hero-subtitle">Wrap logic once, invoke anywhere. Securely run workflows via CLI, TUI & REST with unified logs and typed inputs.</p>
      <div class="hero-actions">
        <a class="hero-button hero-button--primary" href="docs/">Get Started</a>
        <a class="hero-button hero-button--ghost hero-button--icon" href="https://github.com/flowd-org/flowd" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.64.5 12a11.5 11.5 0 008.02 10.93c.6.12.82-.25.82-.57v-2c-3.26.71-3.95-1.39-3.95-1.39-.55-1.38-1.35-1.75-1.35-1.75-1.1-.76.08-.75.08-.75 1.2.09 1.83 1.23 1.83 1.23 1.08 1.84 2.82 1.31 3.51 1 .11-.79.42-1.31.77-1.61-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.32 1.22-3.14-.12-.3-.53-1.52.11-3.16 0 0 .99-.32 3.25 1.2a11.2 11.2 0 015.92 0c2.26-1.52 3.25-1.2 3.25-1.2.64 1.64.23 2.85.12 3.16.76.82 1.22 1.86 1.22 3.14 0 4.52-2.74 5.5-5.36 5.79.44.38.83 1.12.83 2.26v3.35c0 .32.21.69.83.57A11.5 11.5 0 0023.5 12C23.5 5.64 18.36.5 12 .5z"/></svg>
          GitHub
        </a>
      </div>
      <p class="hero-license" style="text-align: left; text-indent: 0.5em;"><strong>Open Source ·</strong> AGPL-3.0 license</p>
    </div>
    <div class="hero-preview">
      <div class="tmux-demo">
        <div class="tmux">
          <div class="tmux__tabs">
            <div class="tmux__dots"><span></span><span></span><span></span></div>
            <div class="tmux__title">flwd — universal runtime</div>
            <div class="tmux__tabs-list">
              <span class="tmux__tab tmux__tab--active">1  zsh — myapp/deploy</span>
              <span class="tmux__tab">2  logs</span>
              <span class="tmux__tab">3  http</span>
            </div>
          </div>
          <div class="tmux__pane">
<pre class="tmux-pre"><br><br><br><span class="comment"><strong><i># 1. Interactive TUI with validation</i></strong></span><br>
<span class="cmd">$ flwd</span> <span class="flag">:tui</span><br>
&gt; Choose: <span class="cmd">myapp/deploy</span><br>
&gt; target [<span class="key">prod</span>]:<br>
&gt; Confirm? [y/N]<br>
<br><br>
<span class="comment"><strong><i># 2. Or standard CLI flags</i></strong></span><br>
<span class="cmd">$ flwd</span> myapp deploy <span class="flag">--target</span> prod <span class="flag">--confirm</span><br>
<br><br>
<span class="comment"><strong><i># 3. Or via REST API (same logic!)</i></strong></span><br>
<span class="cmd">$ curl</span> -s -X POST http://localhost:8080/runs <span class="bs">\</span><br>
-H 'Content-Type: application/json' <span class="bs">\</span><br>
-d '{"job_id":"myapp/deploy","args":{"target":"prod","confirm":true}}'<br>
</pre>
          </div>
          <div class="tmux__status">
            <div class="tmux__left"><span class="tmux__dot"></span>flwd • localhost</div>
            <div class="tmux__right">Catppuccin Frappé • 12:34</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="section-white">
{{< hextra/hero-section heading="h2" style="margin-top:0.5rem;margin-bottom:0.5rem;" >}}What is FLOWD?{{< /hextra/hero-section >}}

<p class="section-subhead">FLOWD stands for <strong>Framework for Language-agnostic Orchestration of Workflows Distributed</strong>.</p>
<br>
<p class="section-subhead">Instead of inventing another buzzword, the name describes what the engine actually does: take plain scripts in your language of choice, orchestrate them as reusable workflows, and run them consistently across CLI, TUI and HTTP.</p>
<br>
<p class="section-subhead"><strong><code>flwd</code></strong> (pronounced "flowed") is the reference engine that implements <strong>FLOWD</strong> — one binary, one contract, any language that can speak stdin/stdout and environment variables.</p>

</section>


<section class="section-white project-status">
{{< hextra/hero-section heading="h2" style="margin-top:0.5rem;margin-bottom:0.5rem;" >}}Project Status {{< /hextra/hero-section >}}

<p class="section-subhead">The project is currently in <strong>pre-1.0</strong> development and is <strong>not yet ready for production use</strong>. <br><br> The features on this page describe the <strong>1.0 design and direction</strong>. For the most accurate picture of what you can use today, please check the <a href="docs/"><strong style="font-weight: 500;"><i>documentation</i>&#8599;</strong></a> <br>and release notes.</p>

{{< hextra/feature-grid cols="2" style="margin:1rem 0 0 0;" >}}
  {{< hextra/feature-card title="Core Features Available" icon="information-circle" subtitle="Core engine, CLI, serve mode and basic job execution are available in the current codebase." >}}
  {{< hextra/feature-card title="Advanced Features In Progress" icon="exclamation" subtitle="Some advanced capabilities (metrics, triggers, MCP, etc.) are planned or experimental." >}}
{{< /hextra/feature-grid >}}

</section>


<section class="section-white">
{{< hextra/hero-section heading="h2" style="margin-top:0.5rem;margin-bottom:0.5rem;" >}}From Scripts to Systems: Use cases{{< /hextra/hero-section >}}

<p class="section-subhead">Stop shipping fragile code. Build robust, self-documenting tools for your team.</p>

{{< hextra/feature-grid cols="3" style="margin:1rem 0 0 0;" >}}
  {{< hextra/feature-card title="Battle‑Hardened Ops Tools" icon="terminal" subtitle="Replace loose shell scripts with reliable CLI and TUI utilities. Give your SREs and Sysadmins tools that validate inputs before execution." >}}
  {{< hextra/feature-card title="Interactive Diagnostics" icon="desktop-computer" subtitle="Create one‑click health checks that stream live logs directly to the user. Debug production issues faster with clear, structured output in the terminal or web." >}}
  {{< hextra/feature-card title="Auditable Automation" icon="collection" subtitle="Run critical backup and restore workflows with confidence. Every execution is journaled, and artifacts are tracked for strict compliance and auditing." >}}
  {{< hextra/feature-card title="Self‑Service Developer Platforms" icon="cog" subtitle="Expose complex infrastructure tasks as safe, simple commands. Let developers trigger deployments or database migrations directly from CI pipelines or internal portals." >}}
  {{< hextra/feature-card title="Streaming Data Pipelines" icon="chart-bar" subtitle="Build report generators that validate parameters upfront and stream progress in real‑time. No more guessing if a long‑running job has hung." >}}
  {{< hextra/feature-card title="White‑Label CLI Apps" icon="cube" subtitle="Turn your workflows into professional products. Use :build-app to compile your logic into a branded, standalone binary for distribution to your team or customers." >}}
{{< /hextra/feature-grid >}}
</section>

<section class="section-muted">
{{< hextra/hero-section heading="h2" style="margin-top:3rem;margin-bottom:1.25rem;" >}}Engineered for Consistency{{< /hextra/hero-section >}}

<p class="section-subhead">Stop maintaining separate logic for your API, CLI, and Admin scripts. flowd enforces one strict contract for discovery, security, and execution—regardless of how the job is triggered.</p>

<div class="why-grid">
  <article class="why-card">
    <span class="why-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"></path>
        <path d="M12 12l8-4.5"></path>
        <path d="M12 12l-8-4.5"></path>
      </svg>
    </span>
    <div>
      <h3>Unified Runtime</h3>
      <p class="why-sub">Zero-Dependency Deployment</p>
      <p>Run on Linux, Windows, or macOS with a single static binary or OCI image. No external databases or message buses required—perfect for laptops, servers, and air-gapped networks.</p>
    </div>
  </article>
  <article class="why-card">
    <span class="why-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <rect x="5" y="5" width="6" height="6" rx="1"></rect>
        <rect x="13" y="5" width="6" height="6" rx="1"></rect>
        <rect x="5" y="13" width="6" height="6" rx="1"></rect>
        <line x1="11" y1="8" x2="13" y2="8"></line>
        <line x1="8" y1="11" x2="8" y2="13"></line>
      </svg>
    </span>
    <div>
      <h3>Multi-Interface</h3>
      <p class="why-sub">Omnichannel Invocation</p>
      <p>Write logic once, access it everywhere. Invoke tools via CLI flags, interactive TUI forms, or REST API calls. All paths share the exact same validation and execution engine.</p>
    </div>
  </article>
  <article class="why-card">
    <span class="why-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M8 5h6l3 3v11a1 1 0 01-1 1H8a1 1 0 01-1-1V6a1 1 0 011-1z"></path>
        <path d="M14 5v4h4"></path>
        <path d="M9 13h6m-6 3h4"></path>
      </svg>
    </span>
    <div>
      <h3>Type-Safe Contracts</h3>
      <p class="why-sub">Input Integrity by Design</p>
      <p>Define inputs with ArgSpec and let the system handle the rest. flowd automatically generates CLI flags and API schemas, ensuring bad data is rejected before your script ever runs.</p>
    </div>
  </article>
  <article class="why-card">
    <span class="why-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 4l7 3v5c0 4.418-3.134 8.205-7 9-3.866-.795-7-4.582-7-9V7z"></path>
        <path d="M12 9v4l2 2"></path>
      </svg>
    </span>
    <div>
      <h3>Security Profiles</h3>
      <p class="why-sub">Governance & Isolation</p>
      <p>Secure by default. Features strict shell isolation, automatic secret redaction, and short-lived tokens. Apply granular policies to control exactly who can run what (and how).</p>
    </div>
  </article>
  <article class="why-card">
    <span class="why-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <line x1="6" y1="7" x2="6" y2="17"></line>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="18" y1="9" x2="18" y2="15"></line>
        <circle cx="6" cy="10" r="1"></circle>
        <circle cx="12" cy="14" r="1"></circle>
        <circle cx="18" cy="12" r="1"></circle>
      </svg>
    </span>
    <div>
      <h3>Instant Observability</h3>
      <p class="why-sub">Visibility without the Setup</p>
      <p>Get full visibility immediately. Enjoy live log streaming (SSE), downloadable artifacts, and structured audit trails. Prometheus metrics are exposed out-of-the-box.</p>
    </div>
  </article>
  <article class="why-card">
    <span class="why-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"></path>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    </span>
    <div>
      <h3>Dynamic Discovery</h3>
      <p class="why-sub">Flexible Tool Sourcing</p>
      <p>Load tools from anywhere. flowd auto-discovers scripts from local filesystems, trusted Git repositories, or OCI add-ons, instantly populating your catalog across all interfaces.</p>
    </div>
  </article>
</div>
</section>


<section class="section-white">
{{< hextra/hero-section heading="h2" style="margin-top:3.5rem;margin-bottom:1.5rem;" >}}Lean Core. Modular Power{{< /hextra/hero-section >}}

<p class="section-subhead">Stop paying for bloat. flowd ships as a lightweight, stable kernel. Advanced capabilities—like TUI, Metrics, and SQL integration—are opt-in extensions. You only load the code you actually need.</p>

{{< hextra/feature-grid cols="3" style="margin:1rem 0 0 0;" >}}
  {{< hextra/feature-card title="Interactive TUI" icon="desktop-computer" subtitle="Zero‑config Interface. Browse tools, fill inputs with validation, and stream logs in a rich terminal UI. No extra coding required." >}}
  {{< hextra/feature-card title="OCI Distribution" icon="cube" subtitle="Portable Packaging. Bundle your tools and dependencies into standard OCI images for reproducible execution anywhere." >}}
  {{< hextra/feature-card title="DB Shim" icon="database" subtitle="Structured Data Access. A managed SQLite interface for scripts that need structured storage—ephemeral cache or persistent state." >}}
  {{< hextra/feature-card title="Developer SDK" icon="terminal" subtitle="Built‑in Scaffolding. Commands like :init, :test, and :gen to rapidly scaffold new tools and generate integration tests." >}}
  {{< hextra/feature-card title="Data Export" icon="cloud-upload" subtitle="Structured Event Stream. Real‑time NDJSON for runs, events, sources, and artifacts—pipe into any logging stack." >}}
  {{< hextra/feature-card title="Auto‑Maintenance" icon="adjustments" subtitle="Database Health. Automated VACUUM, checkpointing, and optimization keep the embedded store fast and safe." >}}
  {{< hextra/feature-card title="Telemetry & Metrics" icon="chart-bar" subtitle="Universal Monitoring. Counters and histograms for job execution—compatible with Prometheus and OpenMetrics." >}}
  {{< hextra/feature-card title="Event‑Driven Triggers" icon="calendar" subtitle="Automation on Autopilot. Fire jobs by RFC 5545 schedules (cron‑like) or secure HMAC webhooks." >}}
  {{< hextra/feature-card title="Background Services" icon="server" subtitle="Long‑Running Processes. Manage rootless, long‑lived services with native log streaming and state supervision." >}}
  {{< hextra/feature-card title="AI Agent Interface (MCP)" icon="chip" subtitle="Ready for LLMs. Instantly expose jobs as executable tools over WebSocket/stdio via the Model Context Protocol." >}}
  {{< hextra/feature-card title="Lifecycle Control" icon="cog" subtitle="Headless Management. Programmatic :service start/stop/restart to manage deployments in headless environments." >}}
  {{< hextra/feature-card title="Community Contributions" icon="user-group" subtitle="Expand the Ecosystem. Missing a capability? Contribute an extension on GitHub and help build what’s next." >}}
{{< /hextra/feature-grid >}}
</section>




<section class="section-muted">
{{< hextra/hero-section heading="h2" style="margin-top:3rem;margin-bottom:1.25rem;" >}}Open, Stable and Community‑Driven{{< /hextra/hero-section >}}

<div class="why-grid why-grid--two">
  <article class="why-card">
    <span class="why-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 4l7 3v5c0 4.418-3.134 8.205-7 9-3.866-.795-7-4.582-7-9V7z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    </span>
    <div>
      <h3>AGPL‑3.0 Licensed</h3>
      <p class="why-sub">Open by Design</p>
      <p>We believe in software freedom. flowd is licensed under AGPL‑3.0 to ensure that improvements to the core framework remain open and accessible to everyone.</p>
    </div>
  </article>

  <article class="why-card">
    <span class="why-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M4 6h16v9a1 1 0 0 1-1 1H8l-4 3V7a1 1 0 0 1 1-1z"></path>
      </svg>
    </span>
    <div>
      <h3>Join the Conversation</h3>
      <p class="why-sub">Builders Helping Builders</p>
      <p>Connect with fellow builders. Whether you are debugging a workflow or architecting a platform, our community is ready to help. See “Community” in the top navigation.</p>
    </div>
  </article>

  <article class="why-card">
    <span class="why-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M7 3v6h6"></path>
        <path d="M7 9l4 4"></path>
        <path d="M11 13H7v4"></path>
        <path d="M17 21v-8l-4 4"></path>
      </svg>
    </span>
    <div>
      <h3>Contribute to the Core</h3>
      <p class="why-sub">PRs Welcome</p>
      <p>Pull requests are welcome. We value clear documentation and stable contracts. Check out our contribution guide to get started.</p>
    </div>
  </article>

  <article class="why-card">
    <span class="why-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="12" rx="2"></rect>
        <path d="M8 8h8"></path>
        <path d="M8 12h6"></path>
      </svg>
    </span>
    <div>
      <h3>Governance & Stability</h3>
      <p class="why-sub">Contracts that Last</p>
      <p>We prioritize stability over churn. The core contracts are locked to ensure backward compatibility, while new capabilities are added via opt‑in extensions.</p>
    </div>
  </article>
</div>
</section>

<section class="bottom-cta">
  <h3>Ready to replace your scripts?</h3>
  <p>Get the single binary and start automating in seconds.</p>
  <div class="cta-buttons">
    <a class="cta-button cta-primary" href="/docs/getting-started/">Get Started</a>
    <a class="cta-button cta-secondary" href="/docs/">Read Docs</a>
  </div>
</section>

