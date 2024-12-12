import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel } from '../../../components/Carousel'
import { IRecipe } from '@/types/recipe'

interface PreviewPopupProps {
  recipe: IRecipe
  isVisible: boolean
}

export default function PreviewPopup({ recipe, isVisible }: PreviewPopupProps) {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <Card className="w-full max-w-md m-4 max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>{recipe.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel images={recipe.images} autoplayInterval={5000} className="mb-4" hideNavigation={true} />
          <p className="text-sm my-2"><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <div className="text-sm mb-2">
            <strong>Ingredients:</strong>
            <div className="grid grid-cols-3 gap-2 mt-1">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={ingredient.image || ''}
                    alt={ingredient.name}
                    className="rounded-full object-cover size-[50px]"
                  />
                  <span className="text-xs mt-1">{ingredient.name}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm"><strong>Instructions:</strong> {recipe.instructions[0]}...</p>
        </CardContent>
      </Card>
    </div>
  )
}

