//
//  ContentView.swift
//  Workshop2
//
//  Created by A.J.A.F. Elissen on 04/10/2022.
//

import SwiftUI

class Counter: ObservableObject {
    @Published var count:Int
    
    init(_ count: Int){
        self.count = count
    }
    
    func increment(){
        count = count + 5
    }
    func increment2(){
        count = count - 5
    }
    func zero(){
        count = 0
    }
    
}

struct CounterView: View {
    @StateObject var counter = Counter(0)
    
    var body: some View {
        Text(String(counter.count))
        Button("+ 5", action: {counter.increment()})
        Button("- 5", action: {counter.increment2()})
        Button("Reset", action: {counter.zero()})
    }
}


struct ContentView: View {
    @State var random: Int = 0
    
    var body: some View{
        VStack{CounterView()
            
            Spacer()
            
            Text(String(random))
            Button("Random 0-1000", action: { random = Int.random(in: 1...1000) })
            Button("Reset", action: {random = 0})
        }
        .font(.system(size: 26))
    }
    }
