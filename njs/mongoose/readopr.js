exports.getProducts = async (req, res) => {
    try {
      const allProducts = await Product.find({});
      // const allProducts = await Product.find(
      //   {},
      //   {
      //     _id: false,
      //   }
      // );
      return res.status(200).json({
        success: true,
        data: allProducts,
        message: "all data fetched successfully",
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: e.message,
      });
    }
  };
  
  exports.getProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById({ _id: id });
      if (!product) {
        return res.status(499).json({
          success: false,
          message: "invalid product objcet id",
        });
      }
      return res.status(200).json({
        data: product,
        message: "product information fetch successfully",
        success: true,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: e.message,
      });
    }
  };