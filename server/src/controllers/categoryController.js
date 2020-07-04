import models from "../models";
import { slugify } from "../utils/helpers";
import { Op } from "sequelize";
const getAllCategories = async (req, res) => {
  console.log(res.locals.cloudinary);
  try {
    let excludedQueryFields = [
      "limit",
      "offset",
      "page",
      "attributes",
      "search",
    ];

    let queryParams = { ...req.query };
    excludedQueryFields.forEach((element) => {
      console.log("element=", element);
      delete queryParams[element];
    });

    // Object.keys(queryParams).forEach(el => {
    //   console.log("el=", queryParams[el]);
    //   if (typeof queryParams[el] == "object") {
    //     console.log("el2=", queryParams[el]);
    //     if (Object.keys(operators).includes(Object.keys(queryParams[el])[0])) {
    //       queryParams[el] = {
    //         [operators[Object.keys(queryParams[el])[0]]]:
    //           queryParams[Object.keys(queryParams[el])[0]]
    //       };
    //     }
    //   }
    // });

    console.log("query params=", queryParams);
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let offset = (page - 1) * limit;
    let attributes = req.query.attributes || "";
    if (attributes) {
      attributes = attributes.split(",");
    }

    if (req.query.search) {
      queryParams;
    }

    // console.log("attributes=", req.query);
    let queryObject = {
      // include: { model: models.Video, as: "videos" },
      where: queryParams,
      limit,
      offset,
      attributes,
    };

    let query = models.Category.findAll(queryObject);

    const categories = await query;
    res.status(200).json({
      status: true,
      totalItems: categories.length,

      data: {
        categories,
      },
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const categoryExists = await models.Category.findOne({
      title: req.body.title,
    });
    if (categoryExists) {
      res.status(400).json({
        status: false,
        error: "Category with name" + req.body.title + " already exists",
      });
    } else {
      let slug = req.body.slug;
      if (!slug) {
        req.body.slug = slugify(req.body.title);
      }

      const category = await models.Category.create(req.body);
      res.status(201).json({
        status: true,
        message: `Category ${category.title} created successfully`,
        data: {
          category,
        },
      });
      // }
    }
  } catch (err) {
    return res.status(500).json({ error: err.message, status: false });
  }
};

const updateCategory = async (req, res) => {
  try {
  } catch (err) {
    res.status(404).json({ error: err.message, status: false });
  }
};

const deleteCategory = async (req, res) => {
  try {
  } catch (err) {
    res.status(404).json({ error: err.message, status: false });
  }
};

export { getAllCategories, createCategory, updateCategory, deleteCategory };
