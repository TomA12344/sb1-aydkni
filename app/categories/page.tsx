import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCategories } from "@/lib/categories";
import Link from "next/link";

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Kategorien</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.slug} href={`/categories/${category.slug}`}>
            <Card className="group h-full cursor-pointer transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{category.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{category.count} Artikel</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}