import User from '../Schema/user-schema.js';

const addUser = async (request, response) => {
    const user = request.body;
    console.log(user);
    const newUser = new User(user);
    try {
        await newUser.save();
         response.status(201).json(newUser);
    } catch(error) {
        response.status(409).json({ message : error.message });
    }
}
export default addUser; 

export const getUsers=async(request,response)=>{
try {
   const users=await User.find({});
   response.status(200).json(users);
} catch (error) {
    response.status(404).json({ message : error.message });
}
}


export const getUser=async(request,response)=>{
    try {       
       const user=await User.findById(request.params.id);
       response.status(200).json(user);
    } catch (error) {
        response.status(404).json({ message : error.message });
    }
    }

    export const editUser=async(request,response)=>{
        let user = request.body;
        const edituser = new User(user);
        try { 
          await User.updateOne({_id : request.params.id},edituser);
           response.status(200).json(edituser);
        } catch (error) {
            response.status(404).json({ message : error.message });
        }
        }   

        export const deleteuser=async(request,response)=>{
                      try { 
              await User.deleteOne({_id : request.params.id});
               response.status(200).json({message:'user deleted successfully'});
            } catch (error) {
                response.status(404).json({ message : error.message });
            }
            }   