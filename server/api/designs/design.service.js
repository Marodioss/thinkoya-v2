// const pool = require('./database');
const pool = require("../../config/database");
module.exports = {
  find: async () => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      let result;
      const fetchDesignResult = await connection.query(
        `SELECT *
                FROM designs`
      );
      result = fetchDesignResult[0];
      for (var i in result) {
        const fetchDesignImageResult = await connection.query(
          `SELECT idImages ,CONCAT('https://api.thinkoya.com/upload/images/',image) as url
                    FROM designs_image WHERE design_id = ?`,
          [result[i].idDesigns]
        );
        // console.log(result[i]);
        result[i]["images"] = fetchDesignImageResult[0];
      }
      console.log(result);
      return result;
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  },
  findById: async (idDesigns) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      let result;
      const fetchDesignResult = await connection.query(
        `SELECT *
                FROM designs WHERE idDesigns = ?`,
        [idDesigns]
      );
      result = fetchDesignResult[0];
      for (var i in result) {
        const fetchDesignImageResult = await connection.query(
          `SELECT idImages ,CONCAT('https://api.thinkoya.com/upload/images/',image) as url
                    FROM designs_image WHERE design_id = ?`,
          [result[i].idDesigns]
        );
        // console.log(result[i]);
        result[i]["images"] = fetchDesignImageResult[0];
      }
      // console.log(result);
      return result;
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  },

  create: async (design, designs_image) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const queryResult = await connection.query(
        `insert into designs (TitleDesigns, DescriptionDesigns, Category) 
                values (?, ?, ?)`,
        [design.TitleDesigns, design.DescriptionDesign, design.Category]
      );
      const design_id = queryResult[0].insertId;
      for (var i in designs_image) {
        val = designs_image[i];
        await connection.query(
          `insert into designs_image (image ,design_id)
                    values (?, ?)`,
          [val.filename, design_id]
        );
      }
      let result;
      const fetchResult = await connection.query(
        `SELECT *
                FROM designs WHERE idDesigns = ?`,
        [queryResult[0].insertId]
      );
      const images = await connection.query(
        `SELECT idImages,CONCAT('https://api.thinkoya.com/upload/images/',image) as url
                FROM designs_image WHERE design_id = ?`,
        [queryResult[0].insertId]
      );
      await connection.commit();
      result = fetchResult[0][0];
      result["images"] = images[0];
      return result;
    } catch (error) {
      await connection.rollback();
      return error;
    } finally {
      connection.release();
    }
  },
  update: async (design, designs_image) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const queryResult = await connection.query(
        `UPDATE designs 
                SET TitleDesigns = ?, DescriptionDesign = ?, Category = ?
                WHERE id = ?`,
        [
          design.TitleDesigns,
          design.DescriptionDesign,
          design.Category,
          design.id,
        ]
      );
      const design_id = design.id;
      for (var i in design_id) {
        val = designs_image[i];
        await connection.query(
          `UPDATE designs_image 
                    SET image = ?
                    WHERE design_id = ?`,
          [val.filename, design_id]
        );
      }
      let result;
      const fetchResult = await connection.query(
        `SELECT *
                FROM designs WHERE id = ?`,
        [design.id]
      );
      const images = await connection.query(
        `SELECT id,CONCAT('https://api.thinkoya.com/upload/images/',image) as url
                FROM designs_image WHERE design_id = ?`,
        [design.id]
      );
      await connection.commit();
      result = fetchResult[0][0];
      result["images"] = images[0];
      return result;
    } catch (error) {
      await connection.rollback();
      return error;
    } finally {
      connection.release();
    }
  },
  remove: async (id) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const queryResult = await connection.query(
        `DELETE FROM designs WHERE id = ?`,
        [id]
      );
      await connection.commit();
      return queryResult[0];
    } catch (error) {
      await connection.rollback();
      return error;
    } finally {
      connection.release();
    }
  },
  //filter by category
  findByCategory: async (Category) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      let result;
      const fetchDesignResult = await connection.query(
        `SELECT *
                FROM designs WHERE Category = ?`,
        [Category]
      );
      result = fetchDesignResult[0];
      for (var i in result) {
        const fetchDesignImageResult = await connection.query(
          `SELECT idImages ,CONCAT('https://api.thinkoya.com/upload/images/',image) as url
                    FROM designs_image WHERE design_id = ?`,
          [result[i].idDesigns]
        );

        result[i]["images"] = fetchDesignImageResult[0];
      }

      return result;
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  },
};
