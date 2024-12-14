# Portfolio

![Image](/src/assets/imgProjects/portada.png)

| **Curso**       | S2DAW 2024-2025                     |
|------------------|-------------------------------------|
| **Módulo**       | Diseño de Interfaces Web           |
| **Autor**        | Aitor González Barrera             |
| **Fecha de entrega** | 14 de diciembre de 2024            |


- [Portfolio](#portfolio)
  - [1. Descripción](#1-descripción)
  - [2. Enlaces de interés](#2-enlaces-de-interés)
  - [3. Uso de variables para textos](#3-uso-de-variables-para-textos)
    - [Mixin](#mixin)
    - [Cambia el estilo de las etiquetas **h1**, **h2**, **h3** y **p**:](#cambia-el-estilo-de-las-etiquetas-h1-h2-h3-y-p)
  - [5. Uso de mixin para diseño responsivo](#5-uso-de-mixin-para-diseño-responsivo)
    - [Mixin:](#mixin-1)
    - [Ejemplo](#ejemplo)



## 1. Descripción

This is my portfolio where I introduce myself nad show you what i have done over the time and what I am capable of, like my skills in front-end like SASS or Javascript or SQL and Java in back-end. 


## 2. Enlaces de interés

[Enlace a la página desplegada en GitHub Pages](https://github.com/AitorBarrera/Portfolio)

[Enlace para ver el diseño en figma](https://www.figma.com/design/8jkb77ZRE3ETOIMOYG592R/Portfolio?node-id=0-1&t=KflQZYpmE9v1JeSx-1)

## 3. Uso de variables para textos
Listado de estilos cuyo cada estilo contiene tres propiedades: 
1. Tamaño de letra.
2. Espaciado entre lineas.
3. Tipografia.
```scss
$font-styles: (
  tag: (
    font-size: $font-size-tag,
    line-height: $font-line-height-tag,
    font-family: $font-family-Lato
  ),
  smallParagraph: (
    font-size: $font-size-small-paragraph,
    line-height: $font-line-height-small-paragraph,
    font-family: $font-family-Figtree
  ),
  paragraph: (
    font-size: $font-size-paragraph,
    line-height: $font-line-height-paragraph,
    font-family: $font-family-Figtree
  ),
  h3: (
    font-size: $font-size-h3,
    line-height: $font-line-height-h3,
    font-family: $font-family-BrigthRoyale
  ),
  h2: (
    font-size: $font-size-h2,
    line-height: $font-line-height-h2,
    font-family: $font-family-BrigthRoyale
  ),
  h1: (
    font-size: $font-size-h1,
    line-height: $font-line-height-h1,
    font-family: $font-family-BrigthRoyale
  )
);
```

Se utiliza un mixin especial en el cual se indica el estilo de texto que se quiere utilizar como parametro y asignará las propiedas automaticamente, por ejemplo:

### Mixin
```scss
#Mixin diseñado para insertar estilos:
@mixin font($type) {
  $style: map.get($font-styles, $type);

  font-size: map.get($style, font-size);
  line-height: map.get($style, line-height);
  font-family: map.get($style, font-family);
}
```
### Cambia el estilo de las etiquetas **h1**, **h2**, **h3** y **p**:
```scss
h1{
    @include font(h1);
    color: $color-yellow;
    text-shadow: 4px 4px $color-dark-red;
    letter-spacing: 3px;

    @include respond-to(medium){
        font-size: 2.5rem;
        line-height: 3rem;
    };

    @include respond-to(small){
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 2rem;
    };
}

h2{
    @include font(h2);
    color: $color-red;
    letter-spacing: 3px;


    @include respond-to(small){
        font-size: 1rem;
    };
}

h3{
    @include font(h3);
    color: $color-yellow;
    text-shadow: 4px 4px $color-dark-red;
    letter-spacing: 3px;
    
    @include respond-to(medium){
        line-height: 1.5rem
    };

    @include respond-to(small){
        font-size: 1rem;
    };
}

p{
    @include font(paragraph);
    color: $color-white;

    @include respond-to(medium){
        @include font("smallParagraph");
    };
}
```

## 5. Uso de mixin para diseño responsivo
Se usará un mixin el cual tiene preestablecido los tamaños responsivos y se le indica el ancho de la ventana por parametro del cual se desea cambiar el estilo del selector y dentro se declara las propiedades a cambiar.

### Mixin:

```scss
@mixin respond-to($breakpoint) {
  $breakpoints: (
    "small": "max-width: 400px",
    "medium": "max-width: 900px",
    "large": "max-width: 1500px"
  );

  $query: map.get($breakpoints, $breakpoint);

  @if $query {
    @media (#{$query}) {
      @content;
    }

  } @else {
      @error "No se encontró el breakpoint `#{$breakpoint}`.";
  }
}
```
### Ejemplo
En este caso un contenedor **flex** pasa a  ser un contenedor **flex** cuando el ancho de pantalla pasa del *tamaño medio* (**900px**)
```scss
.buttonContact{
            grid-column: 3 / 5;
            margin: 0.5rem;
            background-color: $color-red;
            color: $color-green;
            @include font(paragraph);

            font-weight: 900;
            border: 3px solid $color-green;
            border-radius: 16px;
            cursor: pointer;

            @include respond-to(medium){
                width: 70%;
                font-size: 16px;
            }
        }
```