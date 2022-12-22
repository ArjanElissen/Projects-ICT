//
//  ListView.swift
//  YoutubeTutorial
//
//  Created by A.J.A.F. Elissen on 12/10/2022.
//

import SwiftUI

struct ListView: View {
    @EnvironmentObject var dataManager: DataManager
    @State private var showPopup = false
    
    var body: some View {
        NavigationView {
            List(dataManager.reports, id: \.breed) {dog in Text(dog.breed)
            }
            .navigationTitle("Reports")
            .navigationBarItems(trailing: Button(action:{
                showPopup.toggle()
            }, label: {
                Image(systemName: "plus")
            }))
            .sheet(isPresented: $showPopup){
                ReportView()
            }
        }
        Button("Delete", action: {
            dataManager.deleteDocument()
        })
    }
}


struct ListView_Previews: PreviewProvider {
    static var previews: some View {
        ListView()
            .environmentObject(DataManager())
    }
}
