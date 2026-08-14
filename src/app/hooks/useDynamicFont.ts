import { useEffect } from 'react';

export function useDynamicFont() {
  useEffect(() => {
    async function loadFontConfig() {
      try {
        const response = await fetch('/font-config.txt');
        if (!response.ok) return;
        const text = await response.text();
        
        // Find Google Font URL in text file
        const lines = text.split('\n');
        const fontUrlLine = lines.find(line => line.trim().startsWith('http'));
        if (!fontUrlLine) return;
        
        const fontUrl = fontUrlLine.trim();

        // Dynamically inject link tag into document head
        let linkTag = document.getElementById('dynamic-google-font') as HTMLLinkElement;
        if (!linkTag) {
          linkTag = document.createElement('link');
          linkTag.id = 'dynamic-google-font';
          linkTag.rel = 'stylesheet';
          document.head.appendChild(linkTag);
        }
        linkTag.href = fontUrl;

        // Parse font family name from URL, e.g. "Waiting+for+the+Sunrise" -> "Waiting for the Sunrise"
        const urlParams = new URLSearchParams(fontUrl.split('?')[1] || '');
        const familyParam = urlParams.get('family');
        if (familyParam) {
          const fontFamilyName = familyParam.split(':')[0].replace(/\+/g, ' ');
          document.documentElement.style.setProperty('--couple-font', `'${fontFamilyName}', cursive`);
        }
      } catch (err) {
        console.error('Failed to load dynamic font config:', err);
      }
    }

    loadFontConfig();
  }, []);
}
