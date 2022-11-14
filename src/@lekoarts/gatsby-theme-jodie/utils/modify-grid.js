import {
  onlyProjects,
  filterBySlug
} from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const preferredOrder = ["/interior", "/fashion", "/food", "/product", "/about", "/contact"];

const modifyGrid = (data) => Object.values(onlyProjects(data)
    .reduce((result, slug, index) => ({
      ...result,
      [index]: filterBySlug(data, [preferredOrder[index]]),
     }), {}
    )
  ).flat();

export default modifyGrid;