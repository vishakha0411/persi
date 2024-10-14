exports.addProduct = async (req, res) => {
    try {
      const { name, category, price } = req.body;
      if (!name || !category || !price) {
        return res.status(200).json({
          success: false,
          message: "all fields are required!",
        });
      }
      const product = await Product.create({
        name,
        category,
        price,
      });
      return res.status(201).json({
        success: true,
        data: product,
        message: "product added successfully",
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: e.message,
      });
    }
  };