"use client";

import { useSearchParams } from "next/navigation";
import Living from "./components/Living";

import BedRoom from "./components/BedRoom";
import Storage from "./components/Storage";
import Office from "./components/Office";
import BestSellers from "./components/BestSellers";
import DiningKitchen from "./components/DiningKitchen";
import img from "../../../public/IMG/LivingRoomData/sofa1.jpeg";
import Curvo_sofa from "./components/sofas/Curvo_sofa";
import Hoxton_black_sofa from "./components/sofas/Hoxton_black_sofa";
import Hada_armless_beige from "./components/sofas/Hada_armless_beige";
import Alesso_snow_sofa from "./components/sofas/Alesso_snow_sofa";
import Strato103_sofa from "./components/sofas/Strato103_sofa";
import Noor_green_sofa from "./components/sofas/Noor_green_sofa";
import Bowtie_green_sofa from "./components/sofas/Bowtie_green_sofa";
import Forte_black_sofa from "./components/sofas/Forte_black_sofa";
import Strato_sofa from "./components/sofas/Strato_sofa";
import Salamina_table from "./components/tables/Salamina_table";
import Aster_table from "./components/tables/Aster_table";
import Falls_table from "./components/tables/Falls_table";
import Via_table from "./components/tables/Via_table";
import Sannois_table from "./components/tables/Sannois_table";
import Babylon_table from "./components/tables/Babylon_table";
import Roumare_table from "./components/tables/Roumare_table";
import Spigolo_table from "./components/tables/Spigolo_table";

export default function ProductPage({ params }) {
  const livingroomdata = [
    {
      id: 1,
      name: "CURVO SOFA",
      price: "$2,190.00",
      fabric: "NOMAD SNOW",
      width: `95"`,
      depth: `38"`,
      height: `30.5"`,
      image: require("../../../public/IMG/LivingRoomData/sofa1.jpeg"),
      short_desk: "CURVO SOFA / NOMAD FABRIC IN SNOW",
      log_desk: `A goop classic, now upholstered in our favorite snow white performance fabric. As Gwyneth Paltrow says: "It's a nod to Italian midcentury designs by way of its fluid lines." The undeniably elegant form doesn't sacrifice on comfort, either. Enveloped in a softly textured and durable fabric, its soft crescent shape perches on champagne-finish legs for a light and loungey vibe.`,
      care: "Do not leave spills unattended. Do not use abrasive cleaner. Vacuum and rotate cushion periodically, Blot spills immediately with a clean, absorbent white cloth. ",
      careinstructions:
        "Blot spills immediately with a clean, absorbent cloth. Spot clean with a damp cloth and mild detergent. For stubborn or set stains, work with a professional upholstery cleaning service. (Cleaning Code Reference: W)",
      slug: "Curvo_sofa",
    },
    {
      id: 2,
      name: "HOXTON BLACK LEATHER SOFA",
      price: "$2,999.00",
      fabric: "BELLO LEATHER IN BLACK",
      width: `96.75"`,
      depth: `37.5"`,
      height: `30"`,
      image: require("../../../public/IMG/LivingRoomData/sofa2.jpeg"),
      short_desk: "HOXTON BLACK LEATHER SOFA / BELLO LEATHER IN BLACK",
      log_desk: `The standard sofa stretches out on a modern frame wrapped in rich black leather. Designed by James Patterson, the sofa's slim, discreet profile is edgy and sleek. Brushed brass finished legs squarely support the generous seat, upholstered in dark leather that will continue to patina with character over time.`,
      care: "You've put a lot of care into choosing your furnishings. And with continued care at home, they should share your address for many years to come. Now for your owner's manual... ",
      careinstructions:
        "Blot spills immediately with a clean, absorbent cloth. Spot clean with a damp cloth and mild detergent. For stubborn or set stains, work with a professional upholstery cleaning service. (Cleaning Code Reference: W)",
      slug: "Hoxton_black_sofa",
    },
    {
      id: 3,
      name: "HADA ARMLESS BEIGE LEATHER SOFA",
      price: "$3,999.00",
      fabric: "NOMAD SNOW",
      width: `96"`,
      depth: `37.75"`,
      height: `29"`,
      image: require("../../../public/IMG/LivingRoomData/sofa3.jpeg"),
      short_desk:
        "HADA ARMLESS BEIGE LEATHER SOFA / KINGDOM LEATHER IN SUNFLOWER",
      log_desk: `Drawing on 1970s Italian modernism, armless leather sofa by Jannis Ellenberger has a voluminous look and firm sit made for socializing. Polished stainless steel frame complements buttery-soft beige Moore & Giles leather. Imported from New Zealand, the meticulously pleated leather will develop a beautiful patina over time.`,
      care: "Professional upholstery cleaning only; Do not dry clean.Do not leave spills unattended. Do not use abrasive cleaner. Wrinkles, scarring, and color variation are inherent to leather. ",
      careinstructions:
        "Professional upholstery cleaning only; Do not dry clean.Do not leave spills unattended. Do not use abrasive cleaner. Wrinkles, scarring, and color variation are inherent to leather. ",
      slug: "Hada_armless_beige",
    },
    {
      id: 4,
      name: "ALESSO SNOW WHITE PERFORMANCE ",
      price: "$2,499.00",
      fabric: "ALESSO SNOW WHITE",
      width: `104"`,
      depth: `38"`,
      height: `28.5"`,
      image: require("../../../public/IMG/LivingRoomData/sofa4.jpeg"),
      short_desk:
        "ALESSO SNOW WHITE PERFORMANCE FABRIC SLEEPER SOFA / NOMAD FABRIC IN SNOW",
      log_desk: `Leave it to VUUE to bring a cool safari vibe to a fold-out sleeper sofa. One continuous swoop from arm to arm, sofa is wrapped in luxe white Crypton performance fabric that reads like chenille with a hint of linen. Leather straps wrap around from the side and buckle at the front. Unbuckle and the cushion folds out for a foam mattress that sleeps two.`,
      care: "You've put a lot of care into choosing your furnishings. And with continued care at home, they should share your address for many years to come. Now for your owner's manual... ",
      careinstructions:
        "Do not leave spills unattended.Blot spills immediately with a clean, absorbent white cloth.",
      slug: "Alesso_snow_sofa",
    },
    {
      id: 5,
      name: `STRATO BROWN LEATHER SOFA`,
      price: "$4,299.00",
      fabric: "JAMES LEATHER IN CHESTNUT",
      width: `103"`,
      depth: `38"`,
      height: `27.5"`,
      image: require("../../../public/IMG/LivingRoomData/sofa5.jpeg"),
      short_desk: `STRATO 103" EXTRA-LARGE BROWN LEATHER SOFA / 103"JAMES LEATHER IN CHESTNUT`,
      log_desk: `Designed by Mermelada Estudio, this extra-long vintage '70s-inspired sofa is upholstered in genuine, buttery leather that will age beautifully with time and touch. Covered in plush channel tufting, comfortable doesn't begin to describe it.`,
      care: "You've put a lot of care into choosing your furnishings. And with continued care at home, they should share your address for many years to come. Now for your owner's manual... ",
      careinstructions:
        "Do not leave spills unattended. Do not use abrasive cleaner. Wrinkles, scarring, and color variation are inherent to leather. Blot spills immediately with a clean, absorbent white cloth. Slight fading may occur in direct sunlight. Do not leave in direct sunlight or excessive heat. Professional leather cleaning recommended.",
      slug: "Strato103_sofa",
    },
    {
      id: 6,
      name: "NOOR GREEN BOUCLE SOFA",
      price: "$2,399.00",
      fabric: "NOVA FABRIC IN BASIL",
      width: `104.5"`,
      depth: `36.5"`,
      height: `29.75"`,
      image: require("../../../public/IMG/LivingRoomData/sofa6.jpeg"),
      short_desk: "NOOR GREEN BOUCLE SOFA / TEDDY FABRIC IN EVERGREEN",
      log_desk: `Minimalist sofa by VUUE lets its '70s-inspired details do the talking. Simple silhouette highlights clean, streamlined angles and plays up mirror-like polished stainless steel base. Cushions offer a deep sit and feel cozy in rich green bouclé fabric. `,
      care: "You've put a lot of care into choosing your furnishings. And with continued care at home, they should share your address for many years to come. Now for your owner's manual...",
      careinstructions:
        "Do not leave spills unattended. Do not use abrasive cleaner. Vacuum and rotate cushion periodically. Blot spills immediately with a clean, absorbent white cloth. Protect from heat and liquids. Slight fading may occur in direct sunlight.",
      slug: "Noor_green_sofa",
    },
    {
      id: 7,
      name: "BOWTIE GREEN VELVET SOFA",
      price: "$2,499.00",
      fabric: " NOVA FABRIC IN BASIL",
      width: `95"`,
      depth: `38"`,
      height: `30.5"`,
      image: require("../../../public/IMG/LivingRoomData/sofa7.jpeg"),
      short_desk: "BOWTIE GREEN VELVET SOFA / NOVA FABRIC IN BASIL",
      log_desk: `Quintessential midcentury sofa designed by Paul McCobb feels chic rather than retro, thanks to a verdant green color scheme. Upholstered in plush velvet, sofa also sports contrasting welt seams and FSC ®-certified legs with a black satin finish`,
      care: "You've put a lot of care into choosing your furnishings. And with continued care at home, they should share your address for many years to come. Now for your owner's manual... ",
      careinstructions:
        "Blot spills immediately with a clean, absorbent cloth. Spot clean with a damp cloth and mild detergent. For stubborn or set stains, work with a professional upholstery cleaning service. (Cleaning Code Reference: W)",
      slug: "Bowtie_green_sofa",
    },
    {
      id: 8,
      name: "FORTE CHANNELED BLACK LEATHER ",
      price: "$2,799.00",
      fabric: "HAVANA LEATHER IN RAVEN",
      width: `81"`,
      depth: `36.5"`,
      height: `26.5"`,
      image: require("../../../public/IMG/LivingRoomData/sofa8.jpeg"),
      short_desk: `FORTE CHANNELED BLACK LEATHER SOFA 81" / 81"HAVANA LEATHER IN RAVEN`,
      log_desk: `Cushy channels of glazed black top-grain leather line the length of this gorgeous sofa by Mermelada Estudio. Soft to the touch with a sit on the firmer side, this unexpectedly deep sofa is comfy enough to really curl up. Low-profile wood base with matte black stain brings the right amount of sleekness to this vintage Italian modern statement piece..`,
      care: "You've put a lot of care into choosing your furnishings. And with continued care at home, they should share your address for many years to come. Now for your owner's manual... ",
      careinstructions:
        "Do not leave spills unattended. Do not use abrasive cleaner. Blot spills immediately with a clean, absorbent white cloth. Protect from heat and liquids. Slight fading may occur in direct sunlight. Leather may patina over time with natural color variations. Each hide will be unique, and vary in color, spotting, and size.",
      slug: "Forte_black_sofa",
    },
    {
      id: 9,
      name: `STRATO 80" BOUCLE SOFA`,
      price: "$2,150.00",
      fabric: "BLOCE FABRIC IN PEARL",
      width: `95"`,
      depth: `38"`,
      height: `30.5"`,
      image: require("../../../public/IMG/LivingRoomData/sofa9.jpeg"),
      short_desk: `STRATO 80" BOUCLE SOFA / 80"BLOCE FABRIC IN PEARL`,
      log_desk: `Meet Strato. Designed by Mermelada Estudio, this vintage '70s-inspired sofa is upholstered in soft white boucle with plush channel tufting on all sides. "Cozy" doesn't do it justice..`,
      care: "DYou've put a lot of care into choosing your furnishings. And with continued care at home, they should share your address for many years to come. Now for your owner's manual...",
      careinstructions:
        "Blot spills immediately with a clean, absorbent cloth. Spot clean with a damp cloth and mild detergent. For stubborn or set stains, work with a professional upholstery cleaning service. (Cleaning Code Reference: W)",
      slug: "Strato_sofa",
    },
  ];

  const diningandKitcehn = [
    {
      id: 1,
      name: `SALAMINA DINING TABLE`,
      price: "$2,125.00",
      width: `85"`,
      depth: `30"`,
      height: `30"`,
      image: require("../../../public/IMG/DiningandKitchen/table1.jpeg"),
      short_desk: `SALAMINA RATTAN-WRAPPED ROUND WOOD DINING TABLE`,
      log_desk: `Inspired by the warm and inviting aesthetic of Brazilian midcentury design, natural rattan wraps around the flared base of this Brett Beldock dining table. Mindi wood is featured on top, accentuated by the table's clean lines and rounded edge`,
      careinstructions:
        "Dust with soft dry cloth. Do not leave spills unattended. Protect from heat and liquids. Do not use wax or polish;unit is finished in a protective lacquer.",
      slug: "Salamina_table",
    },
    {
      id: 2,
      name: `ASTER BLACK MARBLE DINING TABLE`,
      price: "$3,899.00",
      width: `96"`,
      depth: `46"`,
      height: `30"`,
      image: require("../../../public/IMG/DiningandKitchen/table2.jpeg"),
      short_desk: `ASTER BLACK MARBLE AND ALUMINUM DINING TABLE`,
      log_desk: `Solid fantasy marble makes a statement in this Brett Beldock design. S-shaped cast aluminum base anchors the oval slab of marble on top. Antiqued finish on the base adds a unique "found" look to the piece.`,
      careinstructions:
        "Dust with soft dry cloth. Do not leave spills unattended. Protect from heat and liquids. Do not use wax or polish;unit is finished in a protective lacquer.",
      slug: "Aster_table",
    },
    {
      id: 3,
      name: `FALLS TRAVERTINE DINING TABLE`,
      price: "$1,499.00",
      width: `96"`,
      depth: `46"`,
      height: `30"`,
      image: require("../../../public/IMG/DiningandKitchen/table3.jpeg"),
      short_desk: `FALLS TRAVERTINE DINING TABLE`,
      log_desk: `Travertine, a signature stone featured in California midcentury modernism, is an ever-inspiring material for the design duo behind Lawson-Fenning. Dining table features a slab of travertine, in warm tones of brown and ivory, resting atop an angular base of solid pine certified sustainable by the Forest Stewardship Council ®. Naturally porous travertine retains small pits and color variation, only adding to the piece's character; no two will be alike`,
      careinstructions:
        "Dust with soft dry cloth. Do not leave spills unattended. Protect from heat and liquids. Do not use wax or polish;unit is finished in a protective lacquer.",
      slug: "falls_table",
    },
    {
      id: 4,
      name: `VIA RECTANGULAR WHITE DINING TABLE`,
      price: "$2,499.00",
      width: `92"`,
      depth: `43.3"`,
      height: `29.75"`,
      image: require("../../../public/IMG/DiningandKitchen/table4.jpeg"),
      short_desk: `VIA RECTANGULAR WHITE PLASTER DINING TABLE`,
      log_desk: `The minimalist form and concrete construction of this Caleb Zipperer design calls to mind a bold, Brutalist aesthetic, softened by a white plaster finish. The raw texture on the tapered legs contrasts with the sleek slab of concrete on top, adding an unexpected architectural element to the dining room`,
      careinstructions:
        "Dust with soft dry cloth. Do not leave spills unattended. Protect from heat and liquids. Do not use wax or polish;unit is finished in a protective lacquer.",
      slug: "via_table",
    },
    {
      id: 5,
      name: `SANNOIS ROUND WHITE DINING TABLE`,
      price: "$2,499.00",
      width: `60"`,
      depth: `60"`,
      height: `30.25"`,
      image: require("../../../public/IMG/DiningandKitchen/table5.jpeg"),
      short_desk: `SANNOIS ROUND LACQUERED LINEN WHITE DINING TABLE`,
      log_desk: `Cylinders wrapped in a white lacquered linen finish cluster together to form a base with a unique silhouette. Poplar wood certified sustainable by the Forest Stewardship Council ® floats on top for a Nicholas Obeid design that combines the organic with the unexpected. Table seats up to six.`,
      careinstructions:
        "Dust with soft dry cloth. Do not leave spills unattended. Protect from heat and liquids. Do not use wax or polish;unit is finished in a protective lacquer.",
      slug: "sannois_table",
    },
    {
      id: 6,
      name: `BABYLON WHITE DINING TABLE`,
      price: "$4,999.00",
      width: `90"`,
      depth: `40"`,
      height: `29.25"`,
      image: require("../../../public/IMG/DiningandKitchen/table6.jpeg"),
      short_desk: `BABYLON WHITE MARBLE DINING TABLE`,
      log_desk: `All-marble table by Mermelada Estudio is a true piece of art. Subtle purple and soft grey veins wave across the white marble top and down the rounded solid marble base in a gorgeous display of natural beauty. Designed with marble known for its bold and active veining, each table will be truly unique.`,
      careinstructions:
        "Dust with soft dry cloth. Do not leave spills unattended. Protect from heat and liquids. Do not use wax or polish;unit is finished in a protective lacquer.",
      slug: "babylon_table",
    },
    {
      id: 7,
      name: `ROUMARE GREEN MARBLE DINING TABLE`,
      price: "$2,099.00",
      width: `78"`,
      depth: `42"`,
      height: `29.25"`,
      image: require("../../../public/IMG/DiningandKitchen/table7.jpeg"),
      short_desk: `ROUMARE GREEN MARBLE DINING TABLE`,
      log_desk: `Brett Beldock's elevated dining table makes a statement in graphic green marble. Naturally one-of-a-kind, streaks of light green and white run throughout the polished Green Spider marble top. Supported by four matte black cast aluminum legs, the clean base complements the dramatic veining and activity of the marble above. Table seats up to six.`,
      careinstructions:
        "Dust with soft dry cloth. Do not leave spills unattended. Protect from heat and liquids. Do not use wax or polish;unit is finished in a protective lacquer.",
      slug: "roumare_table",
    },
    {
      id: 8,
      name: `SPIGOLO  OAK DINING TABLE`,
      price: "$2,799.00",
      width: `107.5"`,
      depth: `40"`,
      height: `29.9"`,
      image: require("../../../public/IMG/DiningandKitchen/table8.jpeg"),
      short_desk: `SPIGOLO EXTRA-LARGE BLEACHED OAK DINING TABLE`,
      log_desk: `Crafted from FSC ®-certified solid oak, dining table designed by goop is a fresh take on retro-chic style. White washed with rounded edges, the surfboard-inspired table is elevated and cool, perfect for hosting a laid-back gathering for eight.`,
      careinstructions:
        "Dust with soft dry cloth. Do not leave spills unattended. Protect from heat and liquids. Do not use wax or polish;unit is finished in a protective lacquer.",
      slug: "spigolo_table",
    },
  ];

  const BedRoom = [
    {
      id: 1,
      name: `CANTAR IVORY VELVET BED`,
      price: "$1,799.00",
      width: `68.25"`,
      depth: `91"`,
      height: `33.5"`,
      image: require("../../../public/IMG/BedRoom/bed1.jpeg"),
      short_desk: `CANTAR IVORY VELVET UPHOLSTERED QUEEN BED`,
      log_desk: `Fully upholstered bed by Jannis Ellenberger brings luxury and drama to the bedroom. Padded headboard, footboard and rails are enveloped in ruched ivory velvet; stout cylindrical legs, crafted from black cerused oak certified sustainable by the Forest Stewardship Council ® (FSC), keep the look modern.`,
      careinstructions:
        "Blot spills immediately with a clean, absorbent cloth. Spot clean with a water-free stain remover. For stubborn or set stains, work with a professional upholstery cleaning service. (Cleaning Code Reference: S)",
      slug: "Cantar_bed",
    },
    {
      id: 2,
      name: `FORTE WHITE QUEEN BED`,
      price: "$1,699.00",
      width: `66.75"`,
      depth: `81"`,
      height: `13.75"`,
      image: require("../../../public/IMG/BedRoom/bed2.jpeg"),
      short_desk: `FORTE WHITE QUEEN BED`,
      log_desk: `Designed by Mermelada Estudio, cushy channels of lush white upholstery line the length of this finely tailored bed. Plinth oak wood base keeps a minimal profile finished in a subtle whitewash. A true statement piece. Performance poly/linen upholstery stands up to wear. Learn about Mermelada Estudio on our blog.`,
      careinstructions:
        "Do not leave spills unattended. Do not use abrasive cleaner. Dimensions of bench-made upholstery may vary slightly. Blot spills immediately with a clean, absorbent white cloth. Protect from heat and liquids. Cleaning code will vary depending on fabric selected. Slight fading may occur in direct sunlight. Expansion and contraction will occur with changes in humidity.",
      slug: "Forte_bed",
    },
    {
      id: 3,
      name: `DIANA CAMEL BED`,
      price: "$2,199.00",
      width: `68"`,
      depth: `88"`,
      height: `40.75"`,
      image: require("../../../public/IMG/BedRoom/bed3.jpeg"),
      short_desk: `DIANA CAMEL UPHOLSTERED QUEEN BED`,
      log_desk: `Say it with us: all-over boucle. Camel bed designed by Ross Cassidy is reminiscent of 1930s Italy with its shapely curves and cloud-like presence. A subtle nod to traditional camel-back silhouettes, with a dose of Ross' signature flair.`,
      careinstructions:
        "Protect from heat and liquids. Cleaning code will vary depending on fabric selected. Slight fading may occur in direct sunlight. Expansion and contraction will occur with changes in humidity..",
      slug: "Diana_bed",
    },
    {
      id: 4,
      name: `CLAUDETTE BLACK LEATHER AND VELVET BED`,
      price: "$1,999.00",
      width: `65"`,
      depth: `87.25"`,
      height: `41.75"`,
      image: require("../../../public/IMG/BedRoom/bed4.jpeg"),
      short_desk: `CLAUDETTE BLACK LEATHER AND VELVET UPHOLSTERED QUEEN BED`,
      log_desk: `Tonal and textural contrast make Brett Beldock's upholstered bed a sleek sanctuary. Pleated ribbons of buttery leather cover the headboard, contrasting beautifully with the black velvet wrapping the rails and footboard. Made with pine and poplar certified sustainable by the Forest Stewardship Council ® (FSC), the bed is a study in understated chic. `,
      careinstructions:
        "Do not leave spills unattended. Do not use liquid or aerosol products. Avoid direct sunlight.",
      slug: "Claudette_bed",
    },
    {
      id: 5,
      name: `CANTAR BLUE VELVET BED`,
      price: "$1,750.00",
      width: `68.25"`,
      depth: `91.25"`,
      height: `33.75"`,
      image: require("../../../public/IMG/BedRoom/bed5.jpeg"),
      short_desk: `CANTAR BLUE VELVET UPHOLSTERED QUEEN BED`,
      log_desk: `Fully upholstered bed by Jannis Ellenberger brings luxury and drama to the bedroom. Padded headboard, footboard and rails are enveloped in ruched blue velvet; stout cylindrical legs, crafted from oak certified sustainable by the Forest Stewardship Council ® (FSC), keep the look modern. `,
      careinstructions:
        "Do not leave spills unattended. Do not use liquid or aerosol products. Avoid direct sunlight.",
      slug: "Cantar_bed",
    },
    {
      id: 6,
      name: `STIVALE LIGHT BROWN VELVET BED`,
      price: "$2,050.00",
      width: `73.5"`,
      depth: `93.5"`,
      height: `38.75"`,
      image: require("../../../public/IMG/BedRoom/bed6.jpeg"),
      short_desk: `STIVALE LIGHT BROWN VELVET QUEEN BED`,
      log_desk: `Bed by Jannis Ellenberger echoes Brazilian modernism through soft curves and earthy materials. High-gloss legs, crafted from walnut-colored oak certified sustainable by the Forest Stewardship Council ® (FSC), counterpoise the plush upholstery. Soft cotton/wool velvet in mushroom brown has small flecking for a luxurious, mohair-like appearance and texture that's utterly sumptuous. `,
      careinstructions:
        "Do not leave spills unattended. Do not use liquid or aerosol products. Avoid direct sunlight.",
      slug: "Stivale_bed",
    },
    {
      id: 7,
      name: `DIANA WHITE UPHOLSTERED BED`,
      price: "$1,790.00",
      width: `68"`,
      depth: `88"`,
      height: `40"`,
      image: require("../../../public/IMG/BedRoom/bed7.jpeg"),
      short_desk: `DIANA WHITE UPHOLSTERED QUEEN BED`,
      log_desk: `Say it with us: all-over boucle. White king bed designed by Ross Cassidy is reminiscent of 1930s Italy with its shapely curves and cloud-like presence. A subtle nod to traditional camel-back silhouettes, with a dose of Ross's signature flair.`,
      careinstructions:
        "Blot spills immediately with a clean, absorbent cloth. Spot clean with a water-free stain remover. For stubborn or set stains, work with a professional upholstery cleaning service. (Cleaning Code Reference: S)",
      slug: "Diana_white_bed",
    },
    {
      id: 8,
      name: `NADI CANE QUEEN BED`,
      price: "$1,350.00",
      width: `64"`,
      depth: `85"`,
      height: `47.5"`,
      image: require("../../../public/IMG/BedRoom/bed8.jpeg"),
      short_desk: `NADI CANE QUEEN BED`,
      log_desk: `Organic materials and craftsmanship shine in this bed designed by Mermelada Estudio. Natural rattan is woven by hand into a geometric pattern on the headboard and framed in midtone wood. Learn about Mermelada Estudio on our blog. CB2 exclusive.`,
      careinstructions:
        "Dust with soft dry cloth. Do not use abrasive cleaner. Protect from heat and liquids. Slight fading may occur in direct sunlight. Expansion and contraction will occur with changes in humidity. Clean and wipe with a damp cloth. Do not use wax or polish;unit is finished in a protective lacquer.",
      slug: "Nadi_bed",
    },
  ];

  if (params.slug === "Living_Room") {
    return <Living livingroomdata={livingroomdata} />;
  } else if (params.slug === "BedRoom") {
    return <BedRoom livingroomdata={livingroomdata} />;
  } else if (params.slug === "Storage_media") {
    return <Storage />;
  } else if (params.slug === "Office") {
    return <Office data={data} />;
  } else if (params.slug === "Best_Sellers") {
    return <BestSellers />;
  } else if (params.slug === "Dining_Kitchen") {
    return <DiningKitchen diningandKitcehn={diningandKitcehn} />;
    // _________LIVING ROOM START_____________
  } else if (params.slug === "Curvo_sofa") {
    return <Curvo_sofa livingroomdata={livingroomdata} />;
  } else if (params.slug === "Hoxton_black_sofa") {
    return <Hoxton_black_sofa livingroomdata={livingroomdata} />;
  } else if (params.slug === "Hada_armless_beige") {
    return <Hada_armless_beige livingroomdata={livingroomdata} />;
  } else if (params.slug === "Alesso_snow_sofa") {
    return <Alesso_snow_sofa livingroomdata={livingroomdata} />;
  } else if (params.slug === "Strato103_sofa") {
    return <Strato103_sofa livingroomdata={livingroomdata} />;
  } else if (params.slug === "Noor_green_sofa") {
    return <Noor_green_sofa livingroomdata={livingroomdata} />;
  } else if (params.slug === "Bowtie_green_sofa") {
    return <Bowtie_green_sofa livingroomdata={livingroomdata} />;
  } else if (params.slug === "Strato_sofa") {
    return <Strato_sofa livingroomdata={livingroomdata} />;
  }
  // _________LIVING ROOM END_____________
  // ______DINING AND KITCHEN START______
  // _____DINING TABLES_______
  else if (params.slug === "Salamina_table") {
    return <Salamina_table diningandKitcehn={diningandKitcehn} />;
  } else if (params.slug === "Aster_table") {
    return <Aster_table diningandKitcehn={diningandKitcehn} />;
  } else if (params.slug === "falls_table") {
    return <Falls_table diningandKitcehn={diningandKitcehn} />;
  } else if (params.slug === "via_table") {
    return <Via_table diningandKitcehn={diningandKitcehn} />;
  } else if (params.slug === "sannois_table") {
    return <Sannois_table diningandKitcehn={diningandKitcehn} />;
  } else if (params.slug === "babylon_table") {
    return <Babylon_table diningandKitcehn={diningandKitcehn} />;
  } else if (params.slug === "roumare_table") {
    return <Roumare_table diningandKitcehn={diningandKitcehn} />;
  } else if (params.slug === "spigolo_table") {
    return <Spigolo_table diningandKitcehn={diningandKitcehn} />;
  }

  // _____DINING TABLES_______
  // ______DINING AND KITCHEN END______
}
