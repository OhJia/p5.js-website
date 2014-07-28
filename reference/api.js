YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Amplitude",
        "AudioIn",
        "Env",
        "FFT",
        "Noise",
        "Oscillator",
        "Pulse",
        "SoundFile",
        "p5",
        "p5.Color",
        "p5.Element",
        "p5.Graphics",
        "p5.Image",
        "p5.MediaElement",
        "p5.Vector",
        "p5.dom",
        "p5.sound"
    ],
    "modules": [
        "2D Primitives",
        "Array Functions",
        "Attributes",
        "Calculation",
        "Color",
        "Constants",
        "Creating & Reading",
        "Curves",
        "DOM",
        "Data",
        "Environment",
        "Files",
        "Image",
        "Input",
        "Keyboard",
        "Loading & Displaying",
        "Math",
        "Mouse",
        "Noise",
        "Output",
        "Pixels",
        "Random",
        "Rendering",
        "Setting",
        "Shape",
        "String Functions",
        "Structure",
        "Text Area",
        "Time & Date",
        "Touch",
        "Transform",
        "Trigonometry",
        "Typography",
        "Vertex",
        "p5.dom",
        "p5.sound"
    ],
    "allModules": [
        {
            "displayName": "2D Primitives",
            "name": "2D Primitives"
        },
        {
            "displayName": "Array Functions",
            "name": "Array Functions"
        },
        {
            "displayName": "Attributes",
            "name": "Attributes"
        },
        {
            "displayName": "Calculation",
            "name": "Calculation"
        },
        {
            "displayName": "Color",
            "name": "Color"
        },
        {
            "displayName": "Constants",
            "name": "Constants"
        },
        {
            "displayName": "Creating & Reading",
            "name": "Creating & Reading"
        },
        {
            "displayName": "Curves",
            "name": "Curves"
        },
        {
            "displayName": "Data",
            "name": "Data"
        },
        {
            "displayName": "DOM",
            "name": "DOM",
            "description": "A class to describe..."
        },
        {
            "displayName": "Environment",
            "name": "Environment"
        },
        {
            "displayName": "Files",
            "name": "Files"
        },
        {
            "displayName": "Image",
            "name": "Image",
            "description": "Creates a new p5.Image. A p5.Image is a canvas backed representation of an\nimage. p5 can display .gif, .jpg and .png images. Images may be displayed\nin 2D and 3D space. Before an image is used, it must be loaded with the\nloadImage() function. The p5.Image class contains fields for the width and\nheight of the image, as well as an array called pixels[] that contains the\nvalues for every pixel in the image. The methods described below allow\neasy access to the image's pixels and alpha channel and simplify the\nprocess of compositing.\n\nBefore using the pixels[] array, be sure to use the loadPixels() method on\nthe image to make sure that the pixel data is properly loaded."
        },
        {
            "displayName": "Input",
            "name": "Input"
        },
        {
            "displayName": "Keyboard",
            "name": "Keyboard"
        },
        {
            "displayName": "Loading & Displaying",
            "name": "Loading & Displaying"
        },
        {
            "displayName": "Math",
            "name": "Math",
            "description": "A class to describe a two or three dimensional vector, specifically\na Euclidean (also known as geometric) vector. A vector is an entity\nthat has both magnitude and direction. The datatype, however, stores\nthe components of the vector (x,y for 2D, and x,y,z for 3D). The magnitude\nand direction can be accessed via the methods mag() and heading(). In many\nof the p5.js examples, you will see p5.Vector used to describe a position,\nvelocity, or acceleration. For example, if you consider a rectangle moving\nacross the screen, at any given instant it has a position (a vector that\npoints from the origin to its location), a velocity (the rate at which the\nobject's position changes per time unit, expressed as a vector), and\nacceleration (the rate at which the object's velocity changes per time\nunit, expressed as a vector). Since vectors represent groupings of values,\nwe cannot simply use traditional addition/multiplication/etc. Instead,\nwe'll need to do some \"vector\" math, which is made easy by the methods\ninside the p5.Vector class."
        },
        {
            "displayName": "Mouse",
            "name": "Mouse"
        },
        {
            "displayName": "Noise",
            "name": "Noise"
        },
        {
            "displayName": "Output",
            "name": "Output"
        },
        {
            "displayName": "p5.dom",
            "name": "p5.dom",
            "description": "This is the p5.dom library."
        },
        {
            "displayName": "p5.sound",
            "name": "p5.sound",
            "description": "<p>Create a SoundFile object with a path to a file.</p>\n\n<p>The SoundFile may not be available immediately because\nit loads the file information asynchronously.</p>\n\n<p>To do something with the sound as soon as it loads\npass the name of a function as the second parameter.</p>\n\n<p>Only one file path is required. However, audio file formats \n(i.e. mp3, ogg, wav and m4a/aac) are not supported by all\nweb browsers. If you want to ensure compatability, instead of a single\nfile path, you may include an Array of filepaths, and the browser will\nchoose a format that works.</p>"
        },
        {
            "displayName": "Pixels",
            "name": "Pixels"
        },
        {
            "displayName": "Random",
            "name": "Random"
        },
        {
            "displayName": "Rendering",
            "name": "Rendering",
            "description": "Main graphics and rendering context, as well as the base API \nimplementation for p5.js \"core\". Use this class if you need to draw into \nan off-screen graphics buffer. A p5.Graphics object can be constructed \nwith the <code>createGraphics()</code> function. The fields and methods \nfor this class are extensive, but mirror the normal drawing API for p5."
        },
        {
            "displayName": "Setting",
            "name": "Setting"
        },
        {
            "displayName": "Shape",
            "name": "Shape"
        },
        {
            "displayName": "String Functions",
            "name": "String Functions"
        },
        {
            "displayName": "Structure",
            "name": "Structure"
        },
        {
            "displayName": "Text Area",
            "name": "Text Area"
        },
        {
            "displayName": "Time & Date",
            "name": "Time & Date"
        },
        {
            "displayName": "Touch",
            "name": "Touch"
        },
        {
            "displayName": "Transform",
            "name": "Transform"
        },
        {
            "displayName": "Trigonometry",
            "name": "Trigonometry"
        },
        {
            "displayName": "Typography",
            "name": "Typography"
        },
        {
            "displayName": "Vertex",
            "name": "Vertex"
        }
    ]
} };
});