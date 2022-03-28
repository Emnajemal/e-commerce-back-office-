import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasic: snippetCode = {
  html: `
  <!-- Google Maps Basic Component -->
  <google-map height="400px" width="'100%'"></google-map>
  <!--/ Google Maps Basic Component -->
  `
};
export const snippetCodeMarkerCirclePolygon: snippetCode = {
  html: `
  <!-- Google Maps Marker Circle Polygon Component -->
  <google-map
    height="400px"
    width="'100%'"
    [center]="markerCirclePolygonCenter"
    [zoom]="markerCirclePolygonZoom"
  >
    <map-circle [options]="mapCircleOptions" [center]="mapCircleCenter"></map-circle>
    <map-polygon [options]="mapPolygonOptions" [paths]="mapPolygonPaths"></map-polygon>
  </google-map>
  <!--/ Google Maps Marker Circle Polygon Component -->
  `,
  ts: `
  /**
   * Marker Circle Polygon Component
   */
  public markerCirclePolygonCenter = { lat: 37.421995, lng: -122.084092 };
  public markerCirclePolygonZoom = 15;
  public mapCircleCenter: google.maps.LatLngLiteral = { lat: 37.421995, lng: -122.084092 };

  public mapCircleOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    radius: 200,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    draggable: true,
    center: { lat: 37.421995, lng: -122.084092 }
  };

  // Define the LatLng coordinates for the polygon's  outer path.
  private polygonCoords = [
    { lat: 37.421834, lng: -122.079971 },
    { lat: 37.421672, lng: -122.07273 },
    { lat: 37.419884, lng: -122.079213 }
  ];

  public mapPolygonPaths = [this.polygonCoords];

  public mapPolygonOptions = {
    strokeColor: '#3164bf',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    radius: 200,
    fillColor: '#3164bf',
    fillOpacity: 0.35,
    draggable: true,
    center: { lat: 37.421995, lng: -122.084092 }
  };
  `
};

export const snippetCodeAdvance: snippetCode = {
  html: `
  <!-- Google Maps Advance Component -->
  <google-map
    [zoom]="advanceZoom"
    height="400px"
    width="100%"
    [center]="advanceCenter"
    [options]="advanceOptions"
  >
    <map-rectangle [bounds]="advanceRectangleBounds" [options]="advanceRectangleOptions"></map-rectangle>
  </google-map>
  <!-- Use custom zoom buttons -->
  <div class="mt-1">
    <button class="btn btn-primary" (click)="zoomIn()" rippleEffect>Zoom in</button>
    <button class="btn btn-primary ml-1" (click)="zoomOut()" rippleEffect>Zoom out</button>
  </div>
  <!--/ Google Maps Advance Component -->
  `,
  ts: `
  /**
   * Advance Component
   */
  public advanceZoom = 9;
  public advanceCenter: google.maps.LatLngLiteral = { lat: 44.541012, lng: -78.547917 };
  public advanceOptions: google.maps.MapOptions = {
    maxZoom: 17,
    minZoom: 2
  };
  public advanceRectangleBounds = {
    north: 44.599,
    south: 44.49,
    east: -78.443,
    west: -78.649
  };
  public advanceRectangleOptions = { editable: true };

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Advance Component
   */
  zoomIn() {
    if (this.advanceZoom < this.advanceOptions.maxZoom) this.advanceZoom++;
  }

  zoomOut() {
    if (this.advanceZoom > this.advanceOptions.minZoom) this.advanceZoom--;
  }
  `
};

export const snippetCodeUserLocation: snippetCode = {
  html: `
  <!-- Google Maps User geo-location Component -->
  <google-map [zoom]="userLocationZoom" height="400px" width="100%" [center]="userLocationCenter">
    <map-marker [position]="userLocationCenter"></map-marker>
  </google-map>
  <!--/ Google Maps User geo-location Component -->
  `,
  ts: `
    /**
   * User Location Component
   */
  public userLocationZoom = 15;
  public userLocationCenter: google.maps.LatLngLiteral;

  /**
   * On init
   */
  ngOnInit(): void {
    // Fetch Geolocation
    navigator.geolocation.getCurrentPosition(position => {
      this.userLocationCenter = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });


  }
  `
};

export const snippetCodeCustomIcon: snippetCode = {
  html: `
  <!-- Google Maps User Custom Icons Component -->
  <google-map [zoom]="customIconZoom" height="400px" width="100%" [center]="customIconCenter">
    <map-marker [position]="customIconCenter" [options]="customIconOptions"></map-marker>
    <map-marker [position]="customIcon2Center" [options]="customIcon2Options"></map-marker>
  </google-map>
  <!--/ Google Maps User Custom Icons Component -->
  `,
  ts: `
  /**
   * Custom Icons Component
   */
  public customIconZoom = 13;
  public customIconCenter: google.maps.LatLngLiteral = { lat: 37.421995, lng: -122.084092 };
  public customIcon2Center: google.maps.LatLngLiteral = { lat: 37.431997, lng: -122.094097 };
  private customIconPath = 'assets/images/misc/';
  customIconOptions = {
    icon: this.customIconPath + 'leaf-red.png'
  };
  customIcon2Options = {
    icon: this.customIconPath + 'leaf-green.png'
  };
  `
};

export const snippetCodeMarkerWithTooltip: snippetCode = {
  html: `
  <!-- Google Maps Marker with Tooltip Component -->
  <google-map [zoom]="markerZoom" height="400px" width="100%" [center]="markerCenter">
    <!-- [title]="marker.title" -->
    <map-marker
      #markerElem
      *ngFor="let marker of markers"
      [label]="marker.label"
      [position]="marker.position"
      [options]="marker.options"
      (mapClick)="openInfo(markerElem)"
    >
    </map-marker>
    <map-info-window *ngFor="let marker of markers" [position]="marker.position"
      >Hello Google Maps</map-info-window
    >
  </google-map>
  <!--/ Google Maps Marker with Tooltip Component -->
  `,
  ts: `
  /**
   * Marker with Tooltip Component
   */
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  public markerZoom = 12;
  public streetZoom = 12;
  public markerCenter: google.maps.LatLngLiteral = {
    lat: 47.4073,
    lng: 7.76
  };

  public markers: object[] = [
    {
      position: {
        lat: 47.4073,
        lng: 7.76
      },
      options: {
        draggable: true
      },
      label: 'A'
    },
    {
      position: {
        lat: 47.3769,
        lng: 7.7417
      },
      options: {
        draggable: true
      },
      label: 'B'
    }
  ];

  /**
   * Marker with Tooltip Component
   * @param marker
   */
  openInfo(marker: MapMarker) {
    this.infoWindow.open(marker);
  }
  `
};
