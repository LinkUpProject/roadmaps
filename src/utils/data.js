// lib/data.js
import { categories } from '../data/knowledgeClassify';

export async function getCategories() {
  return categories;
}

export async function getCategory(categoryName) {
  const category = categories.find(category => category.name === categoryName);
  if (!category) {
    throw new Error(`Category ${categoryName} not found`);
  }
  return category;
}

export async function getSubcategory(categoryName, subcategoryName) {
  const category = await getCategory(categoryName);
  const subcategory = category.subcategories.find(subcategory => subcategory.name === subcategoryName);
  if (!subcategory) {
    throw new Error(`Subcategory ${subcategoryName} not found in category ${categoryName}`);
  }
  return subcategory;
}

export async function getRoadmapItem(categoryName, subcategoryName, roadmapName) {
  const subcategory = await getSubcategory(categoryName, subcategoryName);
  const roadmapItem = subcategory.roadmap.find(item => item.name === roadmapName);
  if (!roadmapItem) {
    throw new Error(`Roadmap item ${roadmapName} not found in subcategory ${subcategoryName}`);
  }
  return roadmapItem;
}
