import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Category } from './category.entity';

@Resolver((of) => Category)
export class CategoryResolvers {
  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    return Category.find({});
  }

  @Mutation(() => Category)
  async createCategory(@Arg('name') name: string): Promise<Category> {
    const r = await Category.create({
      name,
    }).save();

    return r;
  }

  @Mutation(() => Category, { nullable: true })
  async editCategory(
    @Arg('id') id: number,
    @Arg('name') name: string
  ): Promise<Category | null> {
    try {
      const c = await Category.findOne({ where: { id } });
      if (!c) throw new Error(`Category with given id of ${id} was not found`);
      c.name = name;
      const updated_data = await c.save();
      return updated_data;
    } catch (error) {
      return null;
    }
  }

  @Mutation(() => Boolean)
  async deleteCategory(@Arg('id') id: number): Promise<boolean> {
    try {
      const c = await Category.findOne({ where: { id } });
      if (!c) throw new Error(`Category with given id of ${id} was not found`);
      await c.remove();
      return true;
    } catch (error) {
      return false;
    }
  }
}
