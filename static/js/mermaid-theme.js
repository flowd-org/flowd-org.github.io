// Custom Mermaid theme configuration for Catppuccin Frappé
if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
        startOnLoad: true,
        theme: 'base',
        themeVariables: {
            // Primary colors for nodes
            primaryColor: '#85c1dc',  // sapphire
            primaryTextColor: '#303446',  // base (dark text)
            primaryBorderColor: '#85c1dc',  // sapphire

            // Line/edge colors
            lineColor: '#a6d189',  // green

            // Secondary/tertiary
            secondaryColor: '#303446',  // base
            tertiaryColor: '#303446',  // base

            // Cluster/subgraph
            clusterBkg: 'transparent',
            clusterBorder: '#85c1dc',  // sapphire

            // CRITICAL: Cluster label text
            titleColor: '#c6d0f5',  // light text for cluster titles

            // Edge labels
            edgeLabelBackground: '#303446',

            // Font
            fontFamily: 'Overpass, system-ui, sans-serif'
        }
    });
}
