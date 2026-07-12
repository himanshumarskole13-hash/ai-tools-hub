import { db } from './firebase'
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  limit,
} from 'firebase/firestore'
import toast from 'react-hot-toast'

export const addTool = async (toolData) => {
  try {
    const docRef = await addDoc(collection(db, 'tools'), {
      ...toolData,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    toast.success('Tool added successfully!')
    return docRef.id
  } catch (error) {
    toast.error('Failed to add tool')
    console.error(error)
    throw error
  }
}

export const getAllTools = async () => {
  try {
    const snapshot = await getDocs(collection(db, 'tools'))
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getTrendingTools = async () => {
  try {
    const q = query(
      collection(db, 'tools'),
      where('isTrending', '==', true),
      limit(6)
    )
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getLatestTools = async () => {
  try {
    const snapshot = await getDocs(collection(db, 'tools'))
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getToolById = async (toolId) => {
  try {
    const docRef = doc(db, 'tools', toolId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      }
    }

    return null
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const updateTool = async (toolId, toolData) => {
  try {
    const docRef = doc(db, 'tools', toolId)

    await updateDoc(docRef, {
      ...toolData,
      updatedAt: new Date(),
    })

    toast.success('Tool updated successfully!')
  } catch (error) {
    toast.error('Failed to update tool')
    console.error(error)
    throw error
  }
}

export const deleteTool = async (toolId) => {
  try {
    await deleteDoc(doc(db, 'tools', toolId))
    toast.success('Tool deleted successfully!')
  } catch (error) {
    toast.error('Failed to delete tool')
    console.error(error)
    throw error
  }
}

export const addContactMessage = async (messageData) => {
  try {
    await addDoc(collection(db, 'messages'), {
      ...messageData,
      createdAt: new Date(),
      read: false,
    })

    toast.success('Message sent successfully!')
  } catch (error) {
    toast.error('Failed to send message')
    console.error(error)
    throw error
  }
      }
