export function createUser(request, response, nextFunction) {
  response.status(200).send("Hallo dari user controller!");
}

export function createUsser2(request, response, nextFunction) {
  response.status(201).json({
    pasyload: {
      name: "Alli",
      email: "alliano@gmail.com",
      password: "1234",
    },
  });
}


/**
 * 
 * POST /v1/product 
 *  // REQ body
 *  {
 *      name: "Migoreng".
 *      qyt: 10,
 *      category: food
 * 
 *  }
 * 
 * 
 * // response
 * {
 *   data: {
 *     name: "Migoreng".
 *     qyt: 10,
 *     category: food
 *   }
 * }
 * 
 * 
 * 
 * 
 */



/**
 * POST /v1/users
 * http status nya 201
 * {
 *   payload: {
 *      name: nama kalian
 *      email: sample@gmail.com
 *      password: secreet
 *   }
 * }
 *
 */
