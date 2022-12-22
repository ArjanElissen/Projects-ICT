//
//  DataManager.swift
//  YoutubeTutorial
//
//  Created by A.J.A.F. Elissen on 12/10/2022.
//

import SwiftUI
import Firebase

class DataManager: ObservableObject{
    @Published var reports: [ReportVar] = []
    let db = Firestore.firestore()
    init(){
        fetchReport()
    }
    
    func fetchReport(){
        reports.removeAll()
        
        let ref = db.collection("Dogs")
        ref.getDocuments {snapshot, error in guard error == nil else {print(error!.localizedDescription)
            return
        }
            if let snapshot = snapshot {
                for document in snapshot.documents {
                    let data = document.data()
                    let id = data["id"] as? String ?? ""
                    let breed = data["breed"] as? String ?? ""
                    let dog = ReportVar(id: id, breed: breed)
                    self.reports.append(dog)
                }
            }
        }
        /*db.collection("dogs").getDocuments(completion: { querysnapshot, error in
         if let error = error{
         print("Error getting documents: \(error)")
         }
         else{
         for document in querysnapshot!.documents {
         print("hallo\(document)")
         }
         }
         })*/
    }
    
    func addReport (dogBreed:String){
        let ref = db.collection("Dogs").document(dogBreed)
        ref.setData(["breed": dogBreed, "id" : 10]) { error in
            if let error = error {
                print(error.localizedDescription)
            }
        }
    }
    func deleteDocument() {
            // [START delete_document]
            db.collection("Dogs").document("").delete() { err in
                if let err = err {
                    print("Error removing document: \(err)")
                } else {
                    print("Document successfully removed!")
                }
            }
        }
}
