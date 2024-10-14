exports.removeProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const removedProduct = await Product.findByIdAndDelete({ _id: id });
      if (!removedProduct) {
        return res.status(499).json({
          success: false,
          message: "invalid product objcet id",
        });
      }
      return res.status(201).json({
        success: true,
        data: removedProduct,
        message: "product deleted successfully",
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        errorMessage: e.message,
      });
    }
  };