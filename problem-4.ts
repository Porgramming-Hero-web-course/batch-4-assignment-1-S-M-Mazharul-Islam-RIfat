type Circle = {
   shape: "circle";
   radius: number
}

type Rectangle = {
   shape: "rectangle";
   width: number;
   height: number;
}

const isCircle = (Shape: Circle | Rectangle): Shape is Circle => {
   return Shape.shape === "circle";
}

const calculateShapeArea = (Shape: Circle | Rectangle): number | string => {
   if (isCircle(Shape)) {
      const radius = Shape.radius, PI = Math.PI;
      return (PI * radius * radius).toFixed(2);
   }
   else {
      const width = Shape.width, height = Shape.height;
      return width * height;
   }
}

console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
console.log(calculateShapeArea({
   shape: "rectangle",
   width: 4,
   height: 6,
}));
