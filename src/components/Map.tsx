import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Label } from './ui/label';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !apiKey || isInitialized) return;

    mapboxgl.accessToken = apiKey;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [72.8777, 19.0760], // Mumbai coordinates
        zoom: 11,
      });

      // Add marker for Mumbai
      new mapboxgl.Marker({ color: '#d4af37' })
        .setLngLat([72.8777, 19.0760])
        .setPopup(new mapboxgl.Popup().setHTML('<h3>MysticSoul India</h3><p>Mumbai, Maharashtra</p>'))
        .addTo(map.current);

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      setIsInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      map.current?.remove();
    };
  }, [apiKey, isInitialized]);

  if (!isInitialized && !apiKey) {
    return (
      <div className="space-y-4 p-6 bg-card border border-lavender rounded-lg">
        <div>
          <Label htmlFor="mapbox-token" className="text-foreground">
            Enter Mapbox Public Token
          </Label>
          <p className="text-sm text-muted-foreground mt-1 mb-3">
            Get your token from{' '}
            <a
              href="https://mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <Input
            id="mapbox-token"
            type="text"
            placeholder="pk.ey..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="border-lavender focus:border-accent"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-lavender">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
