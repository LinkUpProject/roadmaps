{
  /*筛选出的内容组件*/
}

{
  /*导入hooks */
}
import useFilterKnowledge from "../../hooks/filterKnowledeg";
{
  /*导入组件 */
}
import FilterForm from "./FilterForm";
import FilteredItems from "./FilteredItems";

const KnowledgeShow = () => {
  const { selectedCategory, handleCategoryChange, filteredItems } =
    useFilterKnowledge();

  return (
    <div className="bg-white px-8">
      <div className="mx-auto max-w-2xl px-4 border-t lg:max-w-7xl lg:px-8">
        <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside className="sticky top-16 self-start">
            {/*手机端筛选逻辑 */}
            <div className="hidden lg:block">
              <FilterForm
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
              />
            </div>
          </aside>

          <section
            aria-labelledby="product-heading"
            className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
          >
            <FilteredItems filteredItems={filteredItems} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeShow;
