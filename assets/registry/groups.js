// This file was autogenerated by glgen (https://github.com/seshbot/glgen) on 2015-02-11
// Command line: src/gen.py assets/gl.xml -p assets/gl-patch.xml -o build/js/ --force --json
var GL_REGISTRY_GROUPS = [
{"enums": [206, 213, 214, 211, 212], "features": [4, 9, 10, 12, 5, 6, 7, 1, 2, 3], "id": 0, "name": "AccumOp"},
{"enums": [228, 229, 219, 223, 224, 225, 226, 227], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 1, "name": "AlphaFunction"},
{"enums": [129, 81, 87, 112, 139, 90, 93, 44, 702, 97, 114, 150, 104, 54, 108, 162, 63, 117, 19, 121, 5423, 72], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 2, "name": "AttribMask"},
{"enums": [398], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 3, "name": "BlendEquationModeEXT"},
{"enums": [234, 231, 236, 5434, 232, 235, 10, 233], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 4, "name": "BlendingFactorDest"},
{"enums": [234, 236, 5434, 233, 235, 10, 237, 238, 239], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 5, "name": "BlendingFactorSrc"},
{"enums": [5, 5435], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 6, "name": "Boolean"},
{"enums": [93, 97, 104, 117], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 8, "name": "ClearBufferMask"},
{"enums": [32, 15, 5428], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 9, "name": "ClientAttribMask"},
{"enums": [771, 759, 773, 761, 775, 763, 777, 765, 779, 767, 755, 781, 769, 757], "features": [9, 10, 7, 1, 2, 3, 4, 12, 5, 14, 6, 15, 16, 17, 18, 19, 20, 21], "id": 10, "name": "ClipPlaneName"},
{"enums": [254, 250, 251], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 11, "name": "ColorMaterialFace"},
{"enums": [562, 563, 621, 564, 619], "features": [4, 9, 10, 12, 5, 6, 7, 1, 2, 3], "id": 12, "name": "ColorMaterialParameter"},
{"enums": [581, 582, 576, 589, 577, 578, 579, 580], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 13, "name": "ColorPointerType"},
{"enums": [49, 18, 36], "features": [10, 12, 14, 15, 16, 17, 18, 19, 20, 21], "id": 16, "name": "ContextFlagMask"},
{"enums": [35, 17], "features": [14, 15, 16, 17, 18, 19, 20, 21], "id": 17, "name": "ContextProfileMask"},
{"enums": [254, 250, 251], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 21, "name": "CullFaceMode"},
{"enums": [228, 229, 219, 223, 224, 225, 226, 227], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 23, "name": "DepthFunction"},
{"enums": [253, 254, 242, 255, 256, 257, 258, 7, 247, 248, 249, 250, 251, 252], "features": [9, 4, 10, 15, 1, 2, 3, 11, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 24, "name": "DrawBufferMode"},
{"enums": [790, 532, 533, 1040, 1043, 1045, 1047, 1049, 1051, 334, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 313, 333, 738, 739, 336, 339, 346, 347, 757, 355, 761, 360, 765, 769, 319, 773, 370, 777, 791, 784, 787, 788, 789, 386, 792, 793, 392, 395, 397, 399, 325, 910, 408, 423, 424, 425, 426], "features": [9, 11, 10, 7, 1, 2, 3, 4, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 25, "name": "EnableCap"},
{"enums": [267, 268, 260, 261, 262, 263, 265, 9], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 26, "name": "ErrorCode"},
{"enums": [280, 281, 282, 283, 284, 285, 286, 287], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 27, "name": "FeedBackToken"},
{"enums": [275, 278, 276, 277, 274], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 28, "name": "FeedbackType"},
{"enums": [582, 589], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 31, "name": "FogCoordinatePointerType"},
{"enums": [294, 726, 290], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 32, "name": "FogMode"},
{"enums": [352, 348, 349, 350, 351, 353], "features": [4, 9, 10, 12, 5, 6, 7, 1, 2, 3], "id": 33, "name": "FogParameter"},
{"enums": [582, 589], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 34, "name": "FogPointerTypeEXT"},
{"enums": [582, 589], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 35, "name": "FogPointerTypeIBM"},
{"enums": [296, 297], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 40, "name": "FrontFaceDirection"},
{"enums": [301, 299, 300], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 44, "name": "GetMapQuery"},
{"enums": [531, 532, 535, 1045, 1047, 1049, 1051, 1053, 533, 1055, 1057, 1060, 1062, 1065, 1067, 1069, 536, 1072, 1074, 1077, 1043, 1084, 777, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 512, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 373, 376, 377, 379, 382, 383, 384, 385, 386, 388, 390, 392, 393, 394, 395, 396, 397, 398, 399, 401, 402, 404, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 1012, 1079, 1081, 483, 1467, 1981, 1982, 538, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 451, 453, 455, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 505, 476, 477, 478, 479, 480, 481, 304, 485, 486, 487, 305, 488, 490, 491, 493, 494, 495, 496, 497, 498, 499, 307, 500, 501, 502, 503, 504, 303, 506, 507, 508, 509, 510, 309, 511, 310, 311, 312, 313, 516, 517, 316, 317, 520, 319, 320, 321, 513, 524, 525, 526, 325, 326, 327, 328, 514, 515, 737, 738, 739, 314, 315, 518, 757, 519, 761, 765, 318, 769, 521, 773, 522, 784, 523, 787, 788, 789, 790, 791, 322, 792, 793, 323, 324, 527, 1014, 1017, 528, 529, 530, 1040, 306, 308, 910, 911], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 46, "name": "GetPName"},
{"enums": [430, 431, 432, 433, 434, 435, 436, 427, 428, 429], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 47, "name": "GetPixelMap"},
{"enums": [1087, 1089, 534, 1091, 1093, 537, 1095, 1097], "features": [4, 9, 10, 12, 5, 6, 7, 1, 2, 3], "id": 48, "name": "GetPointervPName"},
{"enums": [733, 734, 989, 991, 993, 995, 999, 548, 549, 551, 997, 1007, 1009, 555, 544, 731, 550, 732], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 49, "name": "GetTextureParameter"},
{"enums": [559, 560, 558], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 50, "name": "HintMode"},
{"enums": [1601, 1406, 2082, 3631, 418, 419, 420, 422, 421], "features": [9, 11, 10, 7, 1, 2, 3, 4, 12, 13, 14, 6, 15, 16, 5, 17, 18, 8, 19, 20, 21], "id": 51, "name": "HintTarget"},
{"enums": [578, 582, 589, 580], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 53, "name": "IndexPointerType"},
{"enums": [741, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 742, 743, 744], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 54, "name": "InterleavedArrayFormat"},
{"enums": [985, 987, 937, 939, 952, 959, 970, 942, 944, 946, 956, 948, 916, 968, 950, 954, 961, 980, 966, 972, 963, 918, 974, 921, 923, 925, 927, 977, 930, 932, 740, 983, 934], "features": [9, 11, 10, 15, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 55, "name": "InternalFormat"},
{"enums": [711, 692, 214], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 56, "name": "LightEnvModeSGIX"},
{"enums": [1471, 1469], "features": [4, 9, 10, 12, 5, 6, 7, 3], "id": 58, "name": "LightModelColorControl"},
{"enums": [342, 340, 1467, 341], "features": [4, 9, 10, 12, 5, 6, 7, 1, 2, 3], "id": 59, "name": "LightModelParameter"},
{"enums": [793, 784, 787, 788, 790, 791, 792, 789], "features": [4, 9, 10, 12, 5, 6, 7, 1, 2, 3], "id": 60, "name": "LightName"},
{"enums": [569, 570, 571, 562, 563, 564, 565, 566, 567, 568], "features": [4, 9, 10, 12, 5, 6, 7, 1, 2, 3], "id": 61, "name": "LightParameter"},
{"enums": [573, 574], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 62, "name": "ListMode"},
{"enums": [581, 582, 583, 585, 587, 576, 577, 578, 579, 580], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 63, "name": "ListNameType"},
{"enums": [607, 609, 610, 611, 614, 612, 613, 601, 602, 606, 603, 604, 617, 605, 616, 615], "features": [9, 11, 10, 7, 1, 2, 3, 4, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 65, "name": "LogicOp"},
{"enums": [190, 207, 218, 156, 196, 184, 133, 124, 143, 200], "features": [11, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "id": 66, "name": "MapBufferUsageMask"},
{"enums": [519, 523, 520, 521, 522, 510, 511, 524, 512, 513, 526, 514, 515, 525, 516, 517, 527, 518], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 67, "name": "MapTarget"},
{"enums": [254, 250, 251], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 69, "name": "MaterialFace"},
{"enums": [620, 621, 622, 562, 563, 564, 619], "features": [4, 9, 10, 12, 5, 6, 7, 1, 2, 3], "id": 70, "name": "MaterialParameter"},
{"enums": [629, 630, 624], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 71, "name": "MatrixMode"},
{"enums": [27, 82, 85, 38, 91, 95, 5424, 98, 102, 106, 57, 109, 115, 116, 68, 122], "features": [13, 20, 18, 21, 19], "id": 72, "name": "MemoryBarrierMask"},
{"enums": [683, 684], "features": [9, 10, 7, 2, 3, 4, 12, 5, 14, 6, 15, 16, 17, 18, 19, 20, 21], "id": 73, "name": "MeshMode1"},
{"enums": [683, 684, 685], "features": [9, 10, 15, 2, 3, 4, 12, 5, 14, 6, 7, 16, 17, 18, 19, 20, 21], "id": 74, "name": "MeshMode2"},
{"enums": [578, 582, 576, 589, 580], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 76, "name": "NormalPointerType"},
{"enums": [632, 634, 636], "features": [9, 4, 10, 7, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 19, 20, 21], "id": 80, "name": "PixelCopyType"},
{"enums": [581, 646, 640, 648, 650, 651, 639, 643, 653, 654, 579, 642, 652], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 81, "name": "PixelFormat"},
{"enums": [430, 431, 432, 433, 434, 435, 436, 427, 428, 429], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 82, "name": "PixelMap"},
{"enums": [451, 455, 447, 449, 448, 453, 457, 458, 459, 460, 461, 462, 1019, 1025, 1021, 1023], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 83, "name": "PixelStoreParameter"},
{"enums": [7, 651, 652, 653, 654], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 86, "name": "PixelTexGenMode"},
{"enums": [472, 465, 474, 466, 467, 468, 463, 464, 471, 473, 475, 476, 477, 478], "features": [4, 9, 10, 12, 5, 6, 7, 1, 2, 3], "id": 88, "name": "PixelTransferParameter"},
{"enums": [581, 657, 582, 899, 901, 903, 576, 905, 577, 578, 907, 579, 580], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 89, "name": "PixelType"},
{"enums": [1279, 1293, 1283, 1287], "features": [9, 10, 15, 1, 12, 5, 14, 6, 7, 16, 17, 18, 19, 20, 21], "id": 90, "name": "PointParameterNameSGIS"},
{"enums": [683, 684, 685], "features": [9, 10, 15, 2, 3, 4, 12, 5, 14, 6, 7, 16, 17, 18, 19, 20, 21], "id": 91, "name": "PolygonMode"},
{"enums": [177, 181, 132, 141, 146, 151, 152, 153, 158, 12, 164, 165, 169, 123, 173], "features": [9, 4, 10, 15, 1, 2, 3, 11, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 92, "name": "PrimitiveType"},
{"enums": [253, 242, 255, 256, 257, 258, 247, 248, 249, 250, 251, 252], "features": [9, 11, 10, 7, 1, 2, 3, 4, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 93, "name": "ReadBufferMode"},
{"enums": [686, 687, 688], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 94, "name": "RenderingMode"},
{"enums": [689, 690], "features": [4, 9, 10, 12, 5, 6, 7, 1, 2, 3], "id": 97, "name": "ShadingModel"},
{"enums": [228, 229, 219, 223, 224, 225, 226, 227], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 98, "name": "StencilFunction"},
{"enums": [612, 691, 10, 692, 693, 694], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 99, "name": "StencilOp"},
{"enums": [698, 695, 696, 697], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 100, "name": "StringName"},
{"enums": [23], "features": [11, 13, 14, 15, 16, 17, 18, 19, 20, 21], "id": 101, "name": "SyncObjectMask"},
{"enums": [578, 582, 589, 580], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 102, "name": "TexCoordPointerType"},
{"enums": [708, 709, 700, 710], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 103, "name": "TextureCoordName"},
{"enums": [395, 712, 711, 214], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 104, "name": "TextureEnvMode"},
{"enums": [714, 713], "features": [4, 9, 10, 12, 5, 6, 7, 1, 2, 3], "id": 105, "name": "TextureEnvParameter"},
{"enums": [715], "features": [4, 9, 10, 12, 5, 6, 7, 1, 2, 3], "id": 106, "name": "TextureEnvTarget"},
{"enums": [718, 720, 716], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 108, "name": "TextureGenMode"},
{"enums": [723, 721, 724], "features": [4, 9, 10, 12, 5, 6, 7, 2, 3], "id": 109, "name": "TextureGenParameter"},
{"enums": [725, 726], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 110, "name": "TextureMagFilter"},
{"enums": [727, 725, 726, 728, 730, 729], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 111, "name": "TextureMinFilter"},
{"enums": [1034, 734, 733, 1404, 551, 1007, 731, 732], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 112, "name": "TextureParameterName"},
{"enums": [532, 533, 1002, 1004, 1317, 1319, 1321, 1323, 1027, 1030], "features": [9, 11, 10, 7, 1, 2, 3, 4, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 114, "name": "TextureTarget"},
{"enums": [735, 1305, 1298, 736], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 115, "name": "TextureWrapMode"},
{"enums": [51, 40, 29, 79, 5426, 65, 75], "features": [13, 17, 18, 19, 20, 21], "id": 117, "name": "UseProgramStageMask"},
{"enums": [578, 582, 589, 580], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 119, "name": "VertexPointerType"},
{"enums": [811, 813, 824, 808, 821], "features": [9, 10, 15, 11, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 120, "name": "BlendEquationMode"},
{"enums": [2701, 2704], "features": [9, 10, 7, 1, 11, 12, 13, 14, 6, 15, 16, 17, 18, 8, 19, 20, 21], "id": 121, "name": "BufferPNameARB"},
{"enums": [3472, 5167, 4901, 3866, 4511, 5029, 3275, 4514, 3152, 3278, 3154, 3729, 4532, 4875], "features": [9, 10, 15, 1, 11, 12, 13, 14, 6, 7, 16, 17, 18, 8, 19, 20, 21], "id": 122, "name": "BufferTargetARB"},
{"enums": [3472, 3866, 4511, 3729, 3275, 4514, 3152, 3278, 3154], "features": [9, 10, 7, 1, 11, 12, 13, 14, 6, 15, 16, 17, 18, 8, 19, 20, 21], "id": 123, "name": "BufferUsageARB"},
{"enums": [579, 577], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 124, "name": "DrawElementsType"},
{"enums": [3977, 3965, 4004, 3992, 3980, 3968, 4007, 3958, 3983, 3998, 3971, 4010, 3995, 3986, 3962, 3974, 1488, 4001, 3989], "features": [10, 11, 12, 13, 14, 15, 16, 17, 18, 8, 19, 20, 21], "id": 125, "name": "FramebufferAttachment"},
{"enums": [3898, 4013, 3893], "features": [10, 11, 12, 13, 14, 15, 16, 17, 18, 8, 19, 20, 21], "id": 126, "name": "FramebufferTarget"},
{"enums": [4016], "features": [11, 10, 12, 13, 14, 15, 16, 17, 18, 8, 19, 20, 21], "id": 127, "name": "RenderbufferTarget"},
{"enums": [254, 250, 251], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 128, "name": "StencilFaceDirection"},
{"enums": [650, 654, 651, 652, 653], "features": [9, 11, 10, 15, 1, 2, 3, 4, 12, 5, 14, 6, 7, 16, 13, 17, 18, 8, 19, 20, 21], "id": 129, "name": "TextureComponentCount"},
{"enums": [1995, 1997, 1999, 2001, 2003, 2005, 2007, 2047, 2009, 2011, 2013, 2015, 2017, 2019, 2021, 2023, 2025, 2027, 2029, 2031, 2033, 2035, 1985, 2037, 1987, 2039, 1989, 2041, 1991, 2043, 1993, 2045], "features": [9, 4, 10, 7, 1, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 130, "name": "TextureUnit"},
{"enums": [2434], "features": [9, 11, 10, 12, 13, 14, 7, 15, 17, 18, 8, 19, 20, 16, 21], "id": 131, "name": "VertexAttribPointerPropertyARB"},
{"enums": [582, 595, 576, 577, 578, 579], "features": [9, 4, 10, 7, 1, 2, 3, 11, 12, 5, 14, 6, 15, 16, 13, 17, 18, 8, 19, 20, 21], "id": 132, "name": "VertexAttribPointerType"},
{"enums": [2387, 2390, 2396, 2393, 3304, 3103, 2384, 3180, 3307], "features": [9, 10, 7, 11, 12, 13, 14, 6, 15, 16, 17, 18, 8, 19, 20, 21], "id": 133, "name": "VertexAttribPropertyARB"},
];
