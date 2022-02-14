import ImageFilters, {Utils, Presets} from "react-native-gl-image-filters"


export const MyOwnPreset = Utils.createPreset({
contrast:.75,
saturation: .85,
brightness: 1.15
})

export const MyOwn1977 = Utils.createPreset({
  contrast:1.1,
  brightness:1.1,
  saturation:1.3
})

export const MyGrayScale = Utils.createPreset({
   contrast:1.1,
  brightness:1.1,
  sepia: 0.3,
  
})


export const MyAshby = Utils.createPreset({
   contrast:1.2,
  saturation: 1.8
  sepia: 0.5,
  
})


export const MyAmaro = Utils.createPreset({
   contrast:1.1,
  brightness:1.2,
  sepia: 0.35,
saturation: 1.3
  
})

export const MyWillow = Utils.createPreset({
   contrast:.85,
  brightness:1.2,
  saturation: 0.05
  
})





export const MyAdenView = Utils.createPreset({
   contrast:.95,
  brightness:1.4,
saturation: 0,
  sepia: 0.35,
  
})
/*
filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35);
}

export const MyAdenView = Utils.createPreset({
   contrast:.95,
  brightness:1.4,
saturation: 0,
  sepia: 0.35,
  
})

filter-willow {
  filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2);
}

export const MyWillow = Utils.createPreset({
   contrast:.85,
  brightness:1.2,
  saturation: 0.05
  
})

filter-1977 {
  filter: sepia(.5) hue-rotate(-30deg) saturate(1.4);
}

filter-aden {
  filter: sepia(.2) brightness(1.15) saturate(1.4);
}


filter-amaro {
  filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3);
}


export const MyAmaro = Utils.createPreset({
   contrast:1.1,
  brightness:1.2,
  sepia: 0.35,
saturation: 1.3
  
})
filter-ashby {
  filter: sepia(.5) contrast(1.2) saturate(1.8);

export const MyAshby = Utils.createPreset({
   contrast:1.2,
  saturation: 1.8
  sepia: 0.5,
  
})


}

filter-brannan {
  filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg);
}



filter-brooklyn {
  filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);
}


filter-charmes {
  filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);


filter-clarendon {
  filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);

 */
